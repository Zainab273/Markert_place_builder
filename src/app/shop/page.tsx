import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";  // Make sure the client is set up

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

// Sanity query to fetch products
const query = `*[_type == "product"]{
  _id,
  title,
  price,
  description,
  "image": productImage.asset->url,
  tags,
  discountPercentage,
  isNew
}`;

const fetchProducts = async () => {
  // Fetch products from Sanity API
  const products: Product[] = await client.fetch(query);
  return products;
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/rectangle.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop</h1>
            <p className="text-sm md:text-base text-gray-200">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Shop
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/shop/${product._id}`} key={product._id}>
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">{product.price}</p>
                  <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
