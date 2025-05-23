import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProduct: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please provide all information" }
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })
        const data = await res.json()
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: "Product created" }
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products")
        const data = await res.json();
        set({products : data.data})
    }
})) 