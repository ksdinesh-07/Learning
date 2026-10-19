import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const use_auth_store = defineStore("auth", () => {
  const saved_user = localStorage.getItem("auth_user")
  let initial_user = null
  if (saved_user) {
    try {
      initial_user = JSON.parse(saved_user)
    } catch (err) {
      localStorage.removeItem("auth_user")
    }
  }

  const user = ref(initial_user)

  const is_logged_in = computed(() => user.value !== null)
  const current_user = computed(() => user.value)

  function login(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required")
    }

    user.value = {
      email: email,
      name: email.split("@")[0],
      logged_in_at: new Date().toISOString(),
    }

    localStorage.setItem("auth_user", JSON.stringify(user.value))

    return user.value
  }

  function logout() {
    user.value = null
    localStorage.removeItem("auth_user")
  }

  return {
    user,
    is_logged_in,
    current_user,
    login,
    logout,
  }
})