import React from "react";
import Link from "next/link";


const products = [
  { id: 1, name: "Syltherine", price: "Rp 2,500,000", image: "/images/1.png" },
  { id: 2, name: "Leviosa", price: "Rp 2,500,000", image: "/images/2.png" },
  { id: 3, name: "Lolito", price: "Rp 7,000,000", image: "/images/image-3.png" },
  { id: 4, name: "Respira", price: "Rp 500,000", image: "/images/4.png" },
  { id: 5, name: "Syltherine", price: "Rp 2,500,000", image: "/images/1.png" },
  { id: 6, name: "Leviosa", price: "Rp 2,500,000", image: "/images/2.png" },
  { id: 7, name: "Lolito", price: "Rp 7,000,000", image: "/images/image-3.png" },
  { id: 8, name: "Respira", price: "Rp 500,000", image: "/images/4.png" },
  { id: 9, name: "Syltherine", price: "Rp 2,500,000", image: "/images/1.png" },
  { id: 10, name: "Leviosa", price: "Rp 2,500,000", image: "/images/2.png" },
  { id: 11, name: "Lolito", price: "Rp 7,000,000", image: "/images/image-3.png" },
  { id: 12, name: "Respira", price: "Rp 500,000", image: "/images/4.png" },
  { id: 13, name: "Syltherine", price: "Rp 2,500,000", image: "/images/1.png" },
  { id: 14, name: "Leviosa", price: "Rp 2,500,000", image: "/images/2.png" },
  { id: 15, name: "Lolito", price: "Rp 7,000,000", image: "/images/image-3.png" },
  { id: 16, name: "Respira", price: "Rp 500,000", image: "/images/4.png" },
];


const Hero = () => {
  return (
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
  );
};

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      
      <Hero />


      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id}>
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
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
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
