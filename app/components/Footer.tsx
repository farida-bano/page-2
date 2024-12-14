'use client'; // Add this directive at the top
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState(""); // State for email input

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`); // Corrected template literal syntax
      setEmail(""); // Clear email input after subscription
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <footer className="w-full bg-gray-100 flex flex-col items-center p-4 font-montserrat">
      {/* Bandage Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 w-full px-4 max-w-screen-xl">
        {/* Left Side: "Bandage" Text */}
        <div className="text-xl font-semibold flex-1 mb-4 md:mb-0">
          Bandage
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src="/f.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src="/i.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="w-10 h-10 flex justify-center items-center">
            <img src="/t.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-screen-xl px-4">
        {/* Company Info Section */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-2">Company Info</h4>
          <h5 className="text-sm font-semibold hover:underline">About Us</h5>
          <h5 className="text-sm font-semibold hover:underline">Careers</h5>
          <h5 className="text-sm font-semibold hover:underline">We Are Hiring</h5>
          <h5 className="text-sm font-semibold hover:underline">Blog</h5>
        </div>

        {/* Legal Info Section */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-2">Legal</h4>
          <h5 className="text-sm font-semibold hover:underline">Privacy Policy</h5>
          <h5 className="text-sm font-semibold hover:underline">Terms of Service</h5>
        </div>

        {/* Features Info Section */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-2">Features</h4>
          <h5 className="text-sm font-semibold hover:underline">Business Marketing</h5>
          <h5 className="text-sm font-semibold hover:underline">User Analytic</h5>
          <h5 className="text-sm font-semibold hover:underline">Live Chat</h5>
          <h5 className="text-sm font-semibold hover:underline">Unlimited Support</h5>
        </div>

        {/* Resources Info Section */}
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <h5 className="text-sm font-semibold hover:underline">IOS & Android</h5>
          <h5 className="text-sm font-semibold hover:underline">Watch a Demo</h5>
          <h5 className="text-sm font-semibold hover:underline">Customers</h5>
          <h5 className="text-sm font-semibold hover:underline">API</h5>
        </div>

        {/* "Get in Touch" Section */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold mb-2">Get In Touch</h4>
          <div className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="px-3 py-2 bg-blue-400 text-white font-semibold rounded-r-md hover:bg-blue-500"
            >
              Subscribe
            </button>
          </div>
          <h5 className="text-sm text-center mt-2">Stay updated with our news!</h5>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t pt-4 text-center text-sm text-gray-500 w-full px-4">
        Made With Love By Finland | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
