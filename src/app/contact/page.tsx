"use client"

import React from 'react';

 const Contact = () => {
 
  return (
    <section className="contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-4xl font-bold mb-6 text-center font-serif">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-bold mb-2 ">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-bold mb-2">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-blue-500 rounded-md"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
