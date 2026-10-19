import { describe, it, expect, beforeEach, vi } from "vitest"
import { mount } from "@vue/test-utils"
import { defineComponent, h } from "vue"
import { use_fetch } from "@/composables/use_fetch.js"

// Helper: create a component that uses use_fetch
// We need a component because use_fetch calls onMounted()
function make_test_component(path) {
  return defineComponent({
    setup() {
      const fetch_result = use_fetch(path)
      return {
        data: fetch_result.data,
        loading: fetch_result.loading,
        error: fetch_result.error,
      }
    },
    render() {
      return h("div", [
        this.loading ? h("p", "loading") : null,
        this.error ? h("p", this.error) : null,
        this.data ? h("pre", JSON.stringify(this.data)) : null,
      ])
    },
  })
}

// Helper: flush pending promises + timers
function flush_promises() {
  return new Promise((resolve) => setTimeout(resolve, 0))
}

describe("use_fetch", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.restoreAllMocks()
    localStorage.clear()
  })

  it("starts with loading=true and data=null", async () => {
    // Mock fetch to never resolve during this test
    vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})))

    const Test = make_test_component("/api/products")
    const wrapper = mount(Test)

    expect(wrapper.text()).toContain("loading")
  })

  it("loads data successfully", async () => {
    const fake_data = { success: true, data: [{ id: 1, name: "Product" }] }

    // Mock fetch to return our fake data
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(fake_data),
        })
      )
    )

    const Test = make_test_component("/api/products")
    const wrapper = mount(Test)

    // Wait for the fetch to complete
    await flush_promises()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toContain("loading")
    expect(wrapper.text()).toContain("Product")
  })

  it("handles HTTP errors", async () => {
    // Mock fetch to return a 404
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
        })
      )
    )

    const Test = make_test_component("/api/unknown")
    const wrapper = mount(Test)

    await flush_promises()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain("HTTP 404")
  })

  it("handles network errors", async () => {
    // Mock fetch to throw (simulating no internet)
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("Network down")))
    )

    const Test = make_test_component("/api/products")
    const wrapper = mount(Test)

    await flush_promises()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain("Network down")
  })

  it("prepends API_BASE to the path", async () => {
  const mock_fetch = vi.fn(
    /** @param {string} url */
    (url) =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true, data: [] }),
      })
  )   
 vi.stubGlobal("fetch", mock_fetch)

    const Test = make_test_component("/api/products")
    mount(Test)

    await flush_promises()

    // Expect the fetch to have been called with the full URL
    expect(mock_fetch).toHaveBeenCalledOnce()
    const called_url = mock_fetch.mock.calls[0][0]
    expect(called_url).toContain("/api/products")
    // Should start with http://localhost:3000 (or VITE_API_URL)
    expect(called_url).toMatch(/^http:\/\//)
  })
})