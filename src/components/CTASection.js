// /components/CTASection.js
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons for phone and address
import FormOpenButton from './FormOpenButton';

export default function CTASection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-[#FFD700] to-[#FFB100] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6 leading-tight text-gray-800">
          Ready to Transform Your Home? Let's Make It Happen!
        </h2>

        {/* Section Description */}
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-gray-700">
          Our team of expert designers is eager to bring your vision to life. Reach out now to start the journey!
        </p>

        {/* Contact Details and Action Button */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          {/* Action Button */}
          <div className="mb-8 w-full text-center">
            <FormOpenButton text={'Contact Us'} className="bg-[#FFD700] text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all duration-300" />
          </div>

          {/* Phone Number Section */}
          <div className="flex items-center mb-6 space-x-4">
            <FaPhoneAlt className="text-[#FFB100] text-4xl" />
            <div className="text-left">
              <p className="text-lg text-gray-800 mb-2">Need immediate help?</p>
              <p className="text-2xl font-semibold">
                <a href="tel:+919022485604" className="text-gray-800 hover:text-[#FFB100] transition-all duration-300">
                  +91 90224 85604
                </a>
              </p>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#FFB100] text-4xl" />
            <div className="text-left">
              <p className="text-lg text-gray-800 mb-2">Visit Us At Our Location</p>
              <p className="text-xl font-semibold text-gray-800">Xerbia, Pune</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
