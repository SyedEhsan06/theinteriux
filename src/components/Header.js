"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DesignSessionForm from "./DesignSessionForm";
import Link from "next/link";

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
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo */}
            <img
              src="/logo2nd.png"
              alt="The Interiux"
              className="h-10 object-contain" // Ensures it doesn't stretch and stays within the proper height
            />
            <h1 className="text-2xl font-bold text-primary">The Interiux</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Home
            </Link>
            <a
              href="/about"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Services
            </a>
            <a
              href="#gallary"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Book Consultation Button */}
          <button
            onClick={() => setOpenForm(true)}
            className="hidden md:block bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-focus transition duration-300"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary p-4 absolute top-16 left-0 w-full shadow-lg">
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
                className="block w-full bg-white text-primary py-2 px-4 rounded-lg mt-4 hover:bg-yellow-500 transition duration-300"
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Show the Design Session Form when the state is true */}
      {openForm && <DesignSessionForm setOpenForm={setOpenForm} />}
      {/* Whatsapp icon */}
      <a
        href="https://wa.me/919022485604"
        className="fixed bottom-4 right-0 z-50"
        target="_blank"
        rel="noreferrer"
        >
        <img
          src="/whatsappicon.png"
          alt="Whatsapp Icon"
          className="h-16 object-contain"
        />
        </a>
        
    </div>
  );
};

export default Header;
