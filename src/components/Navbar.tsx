"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Legacy Watches</div>
        <div className="md:flex hidden space-x-4">
          <Link href="/" className="p-2 rounded">Home</Link>
          <Link href="/about" className=" p-2 rounded">About</Link>
          <Link href="/watches" className="p-2 rounded">Watches</Link>
          <Link href="/contact" className="p-2 rounded">Contact</Link>
        </div>

        <button className="md:hidden p-2" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden text-white`}>
        <Link href="/" className="block p-2 border-b">Home</Link>
        <Link href="/about" className="block p-2 border-b ">About</Link>
        <Link href="/watches" className="block p-2 border-b">Watches</Link>
        <Link href="/contact" className="block p-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
