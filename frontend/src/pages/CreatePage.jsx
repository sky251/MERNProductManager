import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store/product";
import toast from 'react-hot-toast'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error("Something went wrong 😢");
    } else {
      toast.success("Product added! 🎉");
    }
  };
  return (
    <>
      <h2>Add Product</h2>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e) => {
            setNewProduct({ ...newProduct, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={(e) => {
            setNewProduct({ ...newProduct, price: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={newProduct.image}
          onChange={(e) => {
            setNewProduct({ ...newProduct, image: e.target.value });
          }}
        />
        <Button onClick={handleAddProduct}>Add</Button>
      </div>
    </>
  );
};

export default CreatePage;
