import { storeToRefs } from "pinia"
import { use_auth_store } from "@/stores/auth.js"

/**
 * Thin wrapper around the Pinia auth store.
 */
export function use_auth() {
  const auth_store = use_auth_store()

  // State & getters (reactive via storeToRefs)
  const { user, is_logged_in, current_user } = storeToRefs(auth_store)

  // Actions
  const { login, logout } = auth_store

  return {
    user,
    is_logged_in,
    current_user,
    login,
    logout,
  }
}