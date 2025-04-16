import express from 'express'
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'
const app = express();
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 5000;


app.use(express.json()) //allows us to accept JSON data in the req.body

app.use("/api/products",productRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`Server started at http://localhost:${port}`)
})