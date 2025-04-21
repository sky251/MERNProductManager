import { Product } from "../models/product.model.js";

export const getData = async (req, res) => {
    try {
        const products = await Product.find({})
        console.log(products);
        res.status(200).json({ success: true, data: products })

    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const saveNewData = async (req, res) => {
    const product = req.body  //user will send data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all the details" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error("Error in creation of product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const updateData = async(req, res) => {
    const { id } = req.params
    const product = req.body
    
    if(!mongoose.Types.ObjectID.isValid(id)){
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,message:updatedProduct})
    } catch (error) {
        res.status(500).json({success:false,message:"Sever error"})
    }
}

export const deleteData = async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" })
        console.error("Error : ", error.message);
    }
    console.log(` id : ${id}`);
}