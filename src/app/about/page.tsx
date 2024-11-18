"use client"
import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" 
      style={{ backgroundImage: "url('/images/about-us-bg.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4 font-serif">About Us</h2>
        <p>Welcome to Legacy Watches, where timeless craftsmanship meets modern style. We offer a curated collection of premium timepieces designed to suit every occasion. Our watches combine precision, durability, and elegance, ensuring each one becomes a lasting part of your legacy.
        <br/>
        <br/>
        Explore our range and discover the perfect watch to mark lifes most important moments. At Legacy Watches, every second matters.</p>
      </div>
    </section>
  );
};

export default About;