import React from "react";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa"; 
import { MdDeliveryDining, MdAssignmentReturn, MdPayment } from "react-icons/md"; 
import NavBar from "@/components/NavBar";


const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
     
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage:'/Public/images/rectangle.png', 
        }}
      >
        <div className="flex flex-col items-center justify-center px-4 py-8">
         
          <div className="mb-4">
            <img src="/images/Meubel House_Logos-05.png" alt="Logo" className="h-16 w-auto" />
          </div>

         
          <div className="text-center text-black px-4 py-2 rounded font-[500] text-[48px] font-poppins">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-sm mt-2">Home &gt; Contact</p>
          </div>
        </div>
      </div>

     
      <section className="container mx-auto px-6 md:px-16 lg:px-32 py-16">
        <h2 className="text-center text-2xl font-bold mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          For more information about our products and services, please feel free
          to drop us <br /> a line. Our staff is always here to help you out. Do not
          hesitate!
        </p>
        <div className="flex flex-col md:flex-row gap-12">
      
          <div className="md:w-1/2 space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-black text-xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p>1234 Street Name, New York, USA</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-black text-xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p>+1 234 567 890</p>
                <p>+1 987 654 321</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaClock className="text-black text-xl mt-1" />
              <div>
                <h3 className="font-bold text-lg">Working Time</h3>
                <p>Monday–Friday: 9:00–20:00</p>
                <p>Saturday–Sunday: 9:00–17:00</p>
              </div>
            </div>
          </div>

         
          <div className="md:w-1/2">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject (optional)"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border px-4 py-3 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-slate-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-around text-center gap-8">
          <div className="flex flex-col items-center">
            <MdDeliveryDining className="text-black text-5xl mb-4" />
            <h3 className="font-bold text-lg">Free Delivery</h3>
            <p>On all orders over ₹500</p>
          </div>
          <div className="flex flex-col items-center">
            <MdAssignmentReturn className="text-black text-5xl mb-4" />
            <h3 className="font-bold text-lg">90 Days Return</h3>
            <p>If goods have problems</p>
          </div>
          <div className="flex flex-col items-center">
            <MdPayment className="text-black text-5xl mb-4" />
            <h3 className="font-bold text-lg">Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ContactPage;
