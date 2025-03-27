import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true // createdAt, updatedAt
})

export const Product = mongoose.model('Product',productSchema)
// const Product = mongoose.model(Collection_Name,Collectin_Schema)
