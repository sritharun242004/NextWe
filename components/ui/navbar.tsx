"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#393e42]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/Screenshot Mar 5 2026 from remove.bg.png"
              alt="NextWe Studio Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#a0ff4a] transition-colors duration-150 font-medium transform hover:scale-105 active:scale-95"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact#booking"
              className="bg-[#a0ff4a] text-black px-4 py-2 rounded-md font-medium hover:bg-[#8ce042] transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-150 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-[#a0ff4a] hover:bg-white/5 transition-all duration-150 font-medium py-2 px-2 rounded-md active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact#booking"
              className="block bg-[#a0ff4a] text-black px-4 py-2 rounded-md font-medium hover:bg-[#8ce042] transition-all duration-150 w-full text-center mt-4 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
