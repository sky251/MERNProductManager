import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const HomePage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <p className="text-gray-500 text-lg mb-6">No products found.</p>
      <Link to="/create">
        <Button>Create Product</Button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default HomePage;