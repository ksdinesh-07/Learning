import { describe, it, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { use_auth_store } from "@/stores/auth.js"

describe("auth store", () => {
  beforeEach(() => {
    // Fresh Pinia + cleared localStorage for each test
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it("starts logged out", () => {
    const auth = use_auth_store()
    expect(auth.user).toBe(null)
    expect(auth.is_logged_in).toBe(false)
    expect(auth.current_user).toBe(null)
  })

  it("logs in with a valid email and password", () => {
    const auth = use_auth_store()
    auth.login("test@example.com", "secret123")

    expect(auth.is_logged_in).toBe(true)
    expect(auth.user).not.toBe(null)
    expect(auth.user.email).toBe("test@example.com")
    expect(auth.user.name).toBe("test")
  })

  it("throws when email or password is missing", () => {
    const auth = use_auth_store()

    expect(() => auth.login("", "secret")).toThrow()
    expect(() => auth.login("test@example.com", "")).toThrow()
    expect(() => auth.login("", "")).toThrow()

    expect(auth.is_logged_in).toBe(false)
  })

  it("saves user to localStorage on login", () => {
    const auth = use_auth_store()
    auth.login("user@shop.com", "pw")

    const saved = localStorage.getItem("auth_user")
    expect(saved).not.toBe(null)

    const parsed = JSON.parse(saved)
    expect(parsed.email).toBe("user@shop.com")
    expect(parsed.name).toBe("user")
  })

  it("logs out and clears localStorage", () => {
    const auth = use_auth_store()
    auth.login("test@example.com", "pw")

    auth.logout()

    expect(auth.is_logged_in).toBe(false)
    expect(auth.user).toBe(null)
    expect(localStorage.getItem("auth_user")).toBe(null)
  })

  it("loads saved user from localStorage on store creation", () => {
    // Pre-seed localStorage before store creation
    const fake_user = {
      email: "saved@example.com",
      name: "saved",
      logged_in_at: new Date().toISOString(),
    }
    localStorage.setItem("auth_user", JSON.stringify(fake_user))

    // Create a new Pinia instance — the store loads from localStorage
    setActivePinia(createPinia())
    const auth = use_auth_store()

    expect(auth.is_logged_in).toBe(true)
    expect(auth.user.email).toBe("saved@example.com")
  })
})