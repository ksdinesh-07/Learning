import express, { Request, Response } from "express"
import cors from "cors"
import product_routes from "./routes/product.routes"

const app = express()
const PORT = 3000

// Middleware (runs on every request)
app.use(cors())
app.use(express.json())

// Health check route
app.get("/api/health", function (_req: Request, res: Response) {
  res.json({status: "ok",message: "Backend is alive!",timestamp: new Date().toISOString(),})})

// Mount product routes
app.use("/api/products", product_routes)

// Start the server
app.listen(PORT, function () {
  console.log("Server running at http://localhost:" + PORT)
})