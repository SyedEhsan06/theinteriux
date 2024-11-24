"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DesignSessionForm from "./DesignSessionForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo and Title */}
          <a href="/" className="flex items-center space-x-3">
            {/* Logo */}
            <img
              src="/logo2nd.png"
              alt="The Interiux"
              className="h-10 object-contain" // Ensures it doesn't stretch and stays within the proper height
            />
            <h1 className="text-2xl font-bold text-[#FFD700]">The Interiux</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#FFD700] transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-[#FFD700] transition duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-[#FFD700] transition duration-300"
            >
              Services
            </a>
            <a
              href="#gallary"
              className="text-gray-800 hover:text-[#FFD700] transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-[#FFD700] transition duration-300"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-[#FFD700] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Book Consultation Button */}
          <button
            onClick={() => setOpenForm(true)}
            className="hidden md:block bg-[#FFD700] text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFD700] p-4 absolute top-16 left-0 w-full shadow-lg">
            <nav className="space-y-4 text-center">
              <a
                href="#home"
                className="block text-white hover:text-gray-800 transition duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-white hover:text-gray-800 transition duration-300"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block text-white hover:text-gray-800 transition duration-300"
              >
                Services
              </a>
              <a
                href="#gallary"
                className="block text-white hover:text-gray-800 transition duration-300"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-gray-800 transition duration-300"
              >
                Contact Us
              </a>
              <button
                onClick={() => {
                  setOpenForm(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full bg-white text-[#FFD700] py-2 px-4 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300"
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Show the Design Session Form when the state is true */}
      {openForm && <DesignSessionForm setOpenForm={setOpenForm} />}
    </div>
  );
};

export default Header;
