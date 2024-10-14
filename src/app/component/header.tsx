import { useState } from "react";
import Link from "next/link";
import logo from "@/asset/img/headerlogo.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src={logo} alt="Logo" />
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-gray-400 hover:border-gray-400"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className="pt-2 pb-4 space-y-2 flex px-[20px] bg-[#539592] flex-col">
          <Link href="/">Landing</Link>
          <Link href="/about">Packages</Link>
          <Link href="/services">Stories</Link>
          <Link href="/contact">Product</Link>
          <Link href="/contact">Gallery</Link>
          <div className="w-full h-[1px] bg-white"></div>
          <Link href="/contact">Log in</Link>
          <Link href="/contact">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}
