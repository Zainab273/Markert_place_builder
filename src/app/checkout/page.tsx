import React from "react";

export default function CheckoutPage() {
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
          
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Country / Region</label>
              <select className="w-full p-3 border rounded-lg">
                <option>Pakistan</option>
                <option>India</option>
                <option>Us</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Street Address</label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border rounded-lg mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (Optional)"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Town / City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-lg"
              />
            </div>

    
            <div>
              <label className="block text-gray-700 mb-2">Province</label>
              <select className="w-full p-3 border rounded-lg">
                <option>Sindh</option>
                <option>Panjab</option>
                <option>Balochistan</option>
                <option>Other</option>
              </select>
            </div>

          
            <div>
              <label className="block text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full p-3 border rounded-lg"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg"
              />
            </div>

     
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border rounded-lg"
              />
            </div>

     
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                rows={4}
                placeholder="Notes about your order"
                className="w-full p-3 border rounded-lg"
              ></textarea>
            </div>
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
          <div className="border-b pb-4 mb-4">
            <p className="flex justify-between">
              <span className="font-semibold">Asgaard Sofa</span>
              <span>Rp 2,500,000</span>
            </p>
          </div>
          <p className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>Rp 2,500,000</span>
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
