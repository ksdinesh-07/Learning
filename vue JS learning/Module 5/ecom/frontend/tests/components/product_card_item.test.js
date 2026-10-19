import { describe, it, expect, beforeEach, vi } from "vitest"
import { mount, config } from "@vue/test-utils"
import product_card_item from "@/components/product_card_item.vue"

// Global stub so RouterLink works in every test
config.global.stubs = {
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ["to"],
  },
}

const sample_product = {
  id: 1,
  product_name: "Wireless Headphones",
  price: 1999,
  image_url: "https://example.com/headphones.jpg",
  category: "electronics",
  stock: 12,
  rating: 4.5,
  description: "Great headphones",
  discount: 10,
}

describe("product_card_item", () => {
  beforeEach(() => {
    // Suppress expected Vue warnings about RouterLink
    vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  it("renders the product name, category, price, rating, description", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    expect(wrapper.text()).toContain("Wireless Headphones")
    expect(wrapper.text()).toContain("electronics")
    expect(wrapper.text()).toContain("1999")
    expect(wrapper.text()).toContain("4.5")
    expect(wrapper.text()).toContain("Great headphones")
  })

  it("renders the product image with correct src and alt", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    const img = wrapper.find("img")
    expect(img.exists()).toBe(true)
    expect(img.attributes("src")).toBe("https://example.com/headphones.jpg")
    expect(img.attributes("alt")).toBe("Wireless Headphones")
  })

  it("shows the default fallback badge when no slot is provided", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    const badge = wrapper.find(".discount-badge")
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toContain("10% off")
  })

  it("shows custom badge content and hides the default badge when #badge slot is provided", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
      slots: {
        badge: '<span class="custom-badge">NEW</span>',
      },
    })

    // Custom content shows
    expect(wrapper.text()).toContain("NEW")

    // Default badge (element with class "discount-badge") is gone
    expect(wrapper.find(".discount-badge").exists()).toBe(false)
  })

  it("shows the default price fallback when no #price slot is provided", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    expect(wrapper.text()).toContain("₹1999")
  })

  it("shows custom price when the #price slot is provided", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
      slots: {
        price: '<span class="custom-price">₹1,999.00</span>',
      },
    })

    expect(wrapper.text()).toContain("₹1,999.00")
  })

  it("shows the default Add to Cart button when no #actions slot is provided", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    const button = wrapper.find("button.add-btn")
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe("Add to Cart")
  })

  it("emits add-to-cart with the product id when the default button is clicked", async () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    const button = wrapper.find("button.add-btn")
    await button.trigger("click")

    expect(wrapper.emitted()).toHaveProperty("add-to-cart")
    expect(wrapper.emitted("add-to-cart")).toHaveLength(1)
    expect(wrapper.emitted("add-to-cart")[0]).toEqual([1])
  })

  it("wraps the image and title in a link to /product/:id", () => {
    const wrapper = mount(product_card_item, {
      props: { product: sample_product },
    })

    const link = wrapper.find("a.card-link")
    expect(link.exists()).toBe(true)
    expect(link.attributes("href")).toBe("/product/1")
  })
})