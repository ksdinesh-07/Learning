import { test, expect } from "@playwright/test"

test.describe("shop flow", () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    // (so each test starts fresh — no logged-in state, no cart)
    await page.goto("/")
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test("user can browse products on home page", async ({ page }) => {
    await page.goto("/")

    // Expect the home page title/heading
    await expect(page.locator("h1")).toContainText("E-com")

    // Expect 4 product cards to be visible
    const cards = page.locator(".card")
    await expect(cards).toHaveCount(4)

    // One of them should be "Wireless Headphones"
    await expect(page.getByText("Wireless Headphones").first()).toBeVisible()
  })

  test("user can add a product to cart", async ({ page }) => {
    await page.goto("/")

    // Wait for products to load
    await page.locator(".card").first().waitFor()

    // Click the first "Add to Cart" button
    await page.getByRole("button", { name: "Add to Cart" }).first().click()

    // Cart badge should show 1
    await expect(page.locator(".cart-badge")).toContainText("1")
  })

  test("user can open cart drawer and see items", async ({ page }) => {
    await page.goto("/")
    await page.locator(".card").first().waitFor()

    // Add item
    await page.getByRole("button", { name: "Add to Cart" }).first().click()

    // Click the cart badge to open drawer
    await page.locator(".cart-badge").click()

    // The drawer should appear with the item inside
    await expect(page.locator(".drawer")).toBeVisible()
    await expect(page.locator(".drawer")).toContainText("Wireless Headphones")
  })

  test("protected checkout redirects to login", async ({ page }) => {
    await page.goto("/checkout")

    // Should be redirected to /login with redirect query
    await expect(page).toHaveURL(/\/login\?redirect=/)
    await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible()
  })

  test("full checkout flow: login → checkout → place order", async ({ page }) => {
    // 1. Add a product to cart first
    await page.goto("/")
    await page.locator(".card").first().waitFor()
    await page.getByRole("button", { name: "Add to Cart" }).first().click()
    await expect(page.locator(".cart-badge")).toContainText("1")

    // 2. Try to checkout while logged out → redirected to login
    await page.goto("/checkout")
    await expect(page).toHaveURL(/\/login\?redirect=/)

    // 3. Fill the login form
    await page.getByLabel("Email").fill("test@example.com")
    await page.getByLabel("Password").fill("any-password")
    await page.getByRole("button", { name: /sign in/i }).click()

    // 4. Should be redirected to /checkout (because of ?redirect=/checkout)
    await expect(page).toHaveURL(/\/checkout/)
    await expect(page.getByRole("heading", { name: "Checkout" })).toBeVisible()

    // 5. Fill shipping details
    await page.getByLabel("Full name").fill("Test User")
    await page.getByLabel("Address").fill("123 Test St")
    await page.getByLabel("Phone").fill("+91 9000000000")

    // 6. Place order
    await page.getByRole("button", { name: /place order/i }).click()

    // 7. Success screen appears
    await expect(page.getByRole("heading", { name: /order placed/i })).toBeVisible()

    // 8. Cart should be empty now
    await page.locator(".cart-badge").click()
    await expect(page.locator(".drawer")).toContainText("Your cart is empty")
  })
})