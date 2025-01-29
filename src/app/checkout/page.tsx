"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load the cart from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white shadow">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-gray-500">
            <a href="/" className="hover:text-gray-700">
              Home
            </a>{" "}
            / Checkout
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Billing Form Fields */}
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            {/* Add other form fields here... */}
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="border-b pb-4 mb-4">
            <p className="flex justify-between text-gray-700">
              <span>Product</span>
              <span>Subtotal</span>
            </p>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="border-b pb-4 mb-4">
              <p className="flex justify-between">
                <span className="font-semibold">{item.name}</span>
                <span>₹{item.subtotal.toLocaleString()}</span>
              </p>
            </div>
          ))}
          <p className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </p>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Direct Bank Transfer
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.
            </p>
          </div>
          <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
            Place Order
          </button>
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

