/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} product_name
 * @property {number} price
 * @property {string} image_url
 * @property {"electronics" | "clothing" | "books" | "home"} category
 * @property {number} stock
 * @property {number} rating
 * @property {string} description
 * @property {number} [discount]
 */

/**
 * @typedef {Object} CartItem
 * @property {number} product_id
 * @property {string} product_name
 * @property {number} price
 * @property {number} quantity
 */

/**
 * @typedef {Object} User
 * @property {string} email
 * @property {string} name
 * @property {string} logged_in_at
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any} [data]
 * @property {string} [error]
 */

// Needed so JSDoc types can be imported from this file
export {}