import express from 'express'
import { connectDB } from './config/db.js';
import { Product } from './models/product.model.js';
const app = express();
const PORT = 5000;


app.use(express.json()) //allows us to accept JSON data in the req.body

app.post("/api/products",async (req,res)=>{
    const product = req.body  //user will send data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please provide all the details"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct})
    } catch (error) {
        console.error("Error in creation of product: ",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
})

app.get("/",(req,res)=>{
    res.send("Tight Tight Tight")
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})