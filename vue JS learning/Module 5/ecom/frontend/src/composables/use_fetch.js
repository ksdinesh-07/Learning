import { ref, onMounted } from "vue"

// Read the base API URL from the environment
// Falls back to localhost if VITE_API_URL isn't set
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000"

/**
 * Composable: fetch data from a path on mount.
 * The path is relative to VITE_API_URL (e.g. "/api/products").
 */
export function use_fetch(path) {
  const data = ref(null)
  const loading = ref(true)
  const error = ref("")

  async function load() {
    loading.value = true
    error.value = ""

    try {
      const url = `${API_BASE}${path}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }
      const json = await response.json()
      data.value = json
    } catch (err) {
      error.value = err.message || "Failed to load"
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    data,
    loading,
    error,
    reload: load,
  }
}