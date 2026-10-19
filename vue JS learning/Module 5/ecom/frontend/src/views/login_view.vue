<script setup>
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { use_auth } from "@/composables/use_auth.js"

const router = useRouter()
const route = useRoute()
const { login, is_logged_in } = use_auth()

// Form fields
const email = ref("")
const password = ref("")
const error_message = ref("")
const loading = ref(false)

// If already logged in, redirect to home (or to the intended page)
onMounted(() => {
  if (is_logged_in.value) {
    router.replace(route.query.redirect || "/")
  }
})

async function handle_submit() {
  error_message.value = ""

  if (!email.value || !password.value) {
    error_message.value = "Please fill in all fields."
    return
  }

  loading.value = true

  try {
    // Fake delay to feel realistic
    await new Promise((resolve) => setTimeout(resolve, 400))

    login(email.value, password.value)

    // Redirect to the intended page (from query) or home
    const redirect_to = route.query.redirect || "/"
    router.push(redirect_to)
  } catch (err) {
    error_message.value = err.message || "Login failed"
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Sign in</h1>
      <p class="hint">Use any email and password (this is a demo).</p>

      <form @submit.prevent="handle_submit">
        <label>
          <span>Email</span>
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            autocomplete="email"
          />
        </label>

        <label>
          <span>Password</span>
          <input
            v-model="password"
            type="password"
            placeholder="Any password"
            autocomplete="current-password"
          />
        </label>

        <p v-if="error_message" class="error">{{ error_message }}</p>

        <button type="submit" :disabled="loading">
          {{ loading ? "Signing in..." : "Sign in" }}
        </button>
      </form>

      <p class="footnote">
        This is a fake login — nothing is sent to a server.
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 32px;
}

h1 {
  margin: 0 0 4px 0;
  font-size: 24px;
}

.hint {
  color: #888;
  font-size: 13px;
  margin: 0 0 24px 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
}

input {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

.error {
  color: #d33;
  font-size: 13px;
  margin: 0;
}

button[type="submit"] {
  padding: 12px;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

button[type="submit"]:hover:not(:disabled) {
  background: #369870;
}

button[type="submit"]:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.footnote {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 20px 0 0 0;
}
</style>