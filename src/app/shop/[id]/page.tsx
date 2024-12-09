import React from "react";
import Link from "next/link";


const relatedProducts = [
  { id: 1, name: "Syltherine", price: "Rp 2,500,000", image: "/images/1.png" },
  { id: 2, name: "Leviosa", price: "Rp 2,500,000", image: "/images/2.png" },
  { id: 3, name: "Lolito", price: "Rp 7,000,000", image: "/images/image-3.png" },
  { id: 4, name: "Respira", price: "Rp 500,000", image: "/images/4.png" },
];

export default function ProductPage({ params }: { params: { id: string } }) {

  const product = {
    id: params.id,
    name: "Asgaard Sofa",
    price: "Rp 2,500,000",
    description: `Embodying the raw, unrefined splendor of rock, the Kitt stool is crafted in either a planet black or an immaculate chalk finish.`,
    sku: "12345",
    category: "Sofas",
    tags: ["Sofa", "Living Room", "Modern"],
    image: "/images/4.png",
    gallery: ["/images/sofa.png", "/images/sofa-1.png", "/images/sofa-2.png", "/images/sofa-3.png"],
  };

  return (
    <div className="min-h-screen">
 
      <section className="bg-gray-50 py-6 px-4">
        <div className="container mx-auto">
          <p className="text-gray-600 text-sm">
            <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> /{" "}
            <span className="text-black font-semibold">{product.name}</span>
          </p>
        </div>
      </section>

   
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
       
        <div>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
          <div className="flex mt-4 space-x-2">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-24 h-24 object-cover rounded-md cursor-pointer border hover:border-gray-800"
              />
            ))}
          </div>
        </div>

       
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">{product.price}</p>
          <div className="flex items-center mb-6">
            <div className="text-yellow-500">★★★★☆</div>
            <span className="ml-2 text-gray-600">(4 Customer Reviews)</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>

       
          <div className="flex items-center space-x-4 mb-6">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Add to Cart</button>
            <Link href="/productcompare">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Go to Compare
              </button>
            </Link>
          </div>

          <ul className="text-gray-600">
            <li>
              <span className="font-semibold">SKU:</span> {product.sku}
            </li>
            <li>
              <span className="font-semibold">Category:</span> {product.category}
            </li>
            <li>
              <span className="font-semibold">Tags:</span> {product.tags.join(", ")}
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div>
          <div className="border-b">
            <button className="px-4 py-2 border-b-2 border-black font-semibold text-gray-800">
              Description
            </button>
            <button className="px-4 py-2 text-gray-600">Additional Information</button>
            <button className="px-4 py-2 text-gray-600">Reviews (4)</button>
          </div>
          <div className="py-6 text-gray-700">
            <p>
              Embodying the raw, unrefined splendor of rock, the Kitt stool is crafted in either a
              planet black or an immaculate chalk finish. Designed in-house by our team of skilled
              designers and engineered for timelessness, this piece fits into both modern and
              traditional spaces.
            </p>
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id}>
              <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Show More</button>
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
