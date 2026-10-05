# E-commerce API Endpoint Reference

Base URL:

```text
http://localhost:5000
```

## Root Endpoint

### GET `/`

Check whether the E-commerce API is running.

**URL**

```text
http://localhost:5000/
```

**Response**

```json
{
    "success": true,
    "message": "E-com API is running"
}
```

---

# Product APIs

## POST `/api/products`

Create a new product.

**URL**

```text
http://localhost:5000/api/products
```

**Sample Request Body**

```json
{
    "name": "Wireless Headphones",
    "description": "Bluetooth wireless headphones with noise cancellation",
    "price": 3500,
    "stock": 25,
    "category": "Electronics",
    "status": "active"
}
```

**Expected Status**

```text
201 Created
```

---

## GET `/api/products`

Get all products.

**URL**

```text
http://localhost:5000/api/products
```

**Request Body**

```text
None
```

---

## GET `/api/products/:id`

Get a single product using its MongoDB ObjectId.

**Example URL**

```text
http://localhost:5000/api/products/6ac26bd807e859c43bdd68e2
```

**Request Body**

```text
None
```

---

## PUT `/api/products/:id`

Update an existing product.

**Example URL**

```text
http://localhost:5000/api/products/6ac26bd807e859c43bdd68e2
```

**Sample Request Body**

```json
{
    "name": "Gaming Laptop",
    "description": "High performance gaming laptop",
    "price": 65000,
    "stock": 15,
    "category": "Electronics",
    "status": "active"
}
```

**Expected Status**

```text
200 OK
```

---

## DELETE `/api/products/:id`

Delete an existing product.

**Example URL**

```text
http://localhost:5000/api/products/6ac26bd807e859c43bdd68e2
```

**Request Body**

```text
None
```

> **Module 5:** This endpoint will be protected so that only users with the `admin` role can delete products.

---

# User APIs

## POST `/api/users`

Create a user using the current Module 4 user model.

**URL**

```text
http://localhost:5000/api/users
```

**Sample Request Body**

```json
{
    "name": "Dinesh Kumar",
    "email": "dinesh@example.com",
    "phone": "9876543210",
    "role": "customer"
}
```

**Expected Status**

```text
201 Created
```

> **Module 5:** A proper `/api/auth/register` endpoint will be introduced for password-based registration and secure password hashing.

---

## GET `/api/users`

Get all users.

**URL**

```text
http://localhost:5000/api/users
```

**Request Body**

```text
None
```

---

## GET `/api/users/:id`

Get a single user using MongoDB ObjectId.

**Example URL**

```text
http://localhost:5000/api/users/6ac26a6107e859c43bdd68e1
```

**Request Body**

```text
None
```

---

## PUT `/api/users/:id`

Update an existing user.

**Example URL**

```text
http://localhost:5000/api/users/6ac26a6107e859c43bdd68e1
```

**Sample Request Body**

```json
{
    "name": "Arul Kumar",
    "email": "arul.updated@example.com",
    "phone": "9876543211",
    "role": "customer"
}
```

---

## DELETE `/api/users/:id`

Delete an existing user.

**Example URL**

```text
http://localhost:5000/api/users/6ac26a6107e859c43bdd68e1
```

**Request Body**

```text
None
```

---

# Order APIs

## POST `/api/orders`

Create a new order.

The current implementation uses a MongoDB transaction to:

1. Check whether each product exists.
2. Check product stock.
3. Reduce product stock.
4. Create the order.
5. Commit all changes together.

If any operation fails, the transaction is rolled back.

**URL**

```text
http://localhost:5000/api/orders
```

**Sample Single-Product Order**

```json
{
    "user_id": "6ac26a6107e859c43bdd68e1",
    "items": [
        {
            "product_id": "6ac26bd807e859c43bdd68e2",
            "quantity": 1,
            "price_at_purchase": 45000
        }
    ],
    "total_amount": 45000
}
```

---

# Multi-Product Order

The API supports multiple products in a single order.

**Sample Request**

```json
{
    "user_id": "6ac26a6107e859c43bdd68e1",
    "items": [
        {
            "product_id": "6ac26bd807e859c43bdd68e2",
            "quantity": 1,
            "price_at_purchase": 45000
        },
        {
            "product_id": "6ac26be007e859c43bdd68e3",
            "quantity": 2,
            "price_at_purchase": 20000
        },
        {
            "product_id": "6ac26be907e859c43bdd68e4",
            "quantity": 1,
            "price_at_purchase": 1200
        }
    ],
    "total_amount": 86200
}
```

### Total Calculation

```text
Laptop:
45000 × 1 = 45000

Mobile:
20000 × 2 = 40000

School Bag:
1200 × 1 = 1200

----------------
Total = 86200
```

All product stock updates and order creation happen inside the same transaction.

If one product does not have enough stock, the transaction is aborted and previously modified products are restored to their original stock.

---

## GET `/api/orders`

Get all orders.

**URL**

```text
http://localhost:5000/api/orders
```

The current implementation populates:

```js
.populate("user_id")
.populate("items.product_id")
```

Therefore, the response contains the referenced user and product information.

**Request Body**

```text
None
```

---

## GET `/api/orders/:id`

Get a single order using its MongoDB ObjectId.

**Example URL**

```text
http://localhost:5000/api/orders/6ac360835b570beeebbdff2a
```

The response includes populated user and product information.

**Request Body**

```text
None
```

---

# Complete Endpoint List

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check API status |
| POST | `/api/products` | Create product |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| POST | `/api/users` | Create user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get order by ID |

---

# Module 5 Authentication APIs

The following endpoints will be added in Module 5.

## POST `/api/auth/register`

Register a new user.

The password will be securely hashed before being stored in MongoDB.

**Planned URL**

```text
http://localhost:5000/api/auth/register
```

**Planned Request Body**

```json
{
    "name": "Dinesh Kumar",
    "email": "dinesh@example.com",
    "phone": "9876543210",
    "password": "SecurePassword123"
}
```

---

## POST `/api/auth/login`

Authenticate an existing user and generate a JWT.

**Planned URL**

```text
http://localhost:5000/api/auth/login
```

**Planned Request Body**

```json
{
    "email": "dinesh@example.com",
    "password": "SecurePassword123"
}
```

**Planned Response**

```json
{
    "success": true,
    "message": "Login successful",
    "token": "<JWT_TOKEN>"
}
```

---

# Module 5 Protected Product Flow

The product deletion endpoint will eventually be protected using authentication and RBAC.

```text
DELETE /api/products/:id
            |
            v
      JWT Authentication
            |
            v
       Verify JWT
            |
            v
    Attach user to req
            |
            v
       RBAC Middleware
            |
            v
       Is role "admin"?
         /        \
       YES         NO
        |           |
        v           v
    Delete       403 Forbidden
    Product
```

Only users whose role is:

```json
{
    "role": "admin"
}
```

will be allowed to delete products.

---

# Important Request Notes

- Use `Content-Type: application/json` when sending JSON request bodies.
- MongoDB ObjectIds must be valid 24-character hexadecimal IDs.
- The current order transaction processes every item in the `items` array.
- If any product has insufficient stock, the entire transaction is rolled back.
- `price_at_purchase` is currently supplied by the client.
- A later security improvement can derive the purchase price from the database instead of trusting the client.
- The current `/api/users` endpoint does not handle passwords.
- Module 5 will introduce secure password hashing using bcrypt or Argon2.
- JWT will be used for stateless authentication.
- Helmet, CORS restrictions, and rate limiting will be added for API hardening.
- RBAC will restrict administrative operations such as product deletion.

# Module 4 Completion

The current E-commerce API has completed the main Module 4 database requirements:

```text
MongoDB
   ↓
Mongoose
   ↓
Schemas
   ↓
Models
   ↓
CRUD
   ↓
Relationships
   ↓
Populate
   ↓
Indexes
   ↓
Transactions
   ↓
Rollback
   ↓
Multi-Product Transactions
```

# Next Module

**Module 5: Advanced Authentication, Security & RBAC**

Main topics:

```text
bcrypt / Argon2
      ↓
Password Hashing
      ↓
Register
      ↓
Login
      ↓
JWT
      ↓
Authentication Middleware
      ↓
RBAC
      ↓
Helmet
      ↓
CORS
      ↓
Rate Limiting
      ↓
Protected Admin APIs
```