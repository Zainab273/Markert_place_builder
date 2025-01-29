"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation"; // Use next/navigation for Client Components
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // Import Image from Next.js for optimized image loading

// Define the Product type
interface Product {
  _id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
}

const query = `*[_type == "product" && _id == $id]{
  _id,
  title,
  price,
  description,
  "image": productImage.asset->url,
  tags,
  discountPercentage,
  isNew
}[0]`;

export default function ProductDetail() {
  const router = useRouter(); // Use next/navigation for routing
  const { id } = useParams(); // Extract product ID from URL

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1); // Set initial quantity to 1

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productData = await client.fetch(query, { id });
        setProduct(productData);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Logic to add product to cart
      const cartItem = {
        ...product,
        quantity,
        subtotal: parseFloat(product.price) * quantity,
      };
      // Dispatch action or update state (e.g., using Context or directly)
      console.log("Product added to cart:", cartItem);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>

          {product.discountPercentage ? (
            <div className="mb-4">
              <span className="line-through text-gray-500">
                ₹{parseFloat(product.price).toLocaleString()}
              </span>{" "}
              <span className="text-red-500 font-bold">
                ₹{" "}
                {(
                  parseFloat(product.price) -
                  (parseFloat(product.price) * product.discountPercentage) / 100
                ).toLocaleString()}
              </span>
            </div>
          ) : (
            <p className="text-lg font-semibold mb-4">
              ₹{parseFloat(product.price).toLocaleString()}
            </p>
          )}

          {product.isNew && (
            <span className="inline-block bg-green-500 text-white text-sm py-1 px-3 rounded-full mb-4">
              New Arrival
            </span>
          )}

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center mb-4">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="bg-gray-200 px-4 py-2 rounded-l"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-4 py-2 rounded-r"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
