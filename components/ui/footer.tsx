"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#393e42] text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <Image
                src="/logo/Screenshot Mar 5 2026 from remove.bg.png"
                alt="NextWe Studio Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Your end-to-end digital transformation partner. We combine cutting-edge
              development, data-driven marketing, and advanced AI engineering.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
              >
                <Github size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Digital Marketing & Performance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Website & App Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  AI & Automation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  UI/UX & Brand Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  AI Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#a0ff4a] transition-colors"
                >
                  Custom AI Development
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#a0ff4a] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  8 Gerizim, Nermai nagar 1st street, Chennai, Tamil Nadu 600099
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#a0ff4a] mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 93446 27455</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#a0ff4a] mr-3 flex-shrink-0" />
                <span className="text-gray-300">leroypinto1977@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>© {currentYear} NextWe Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
