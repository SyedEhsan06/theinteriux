"use client";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const DesignSessionForm = ({ setOpenForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pincode: "",
    whatsapp: false,
    optOut: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate the form data before submitting
    if (!validateForm()) {
      setResponseMessage("Please fill in all fields correctly.");
      setIsSubmitting(false);
      return;
    }

    // Post the form data to Formspree or any backend API
    const res = await fetch("https://formspree.io/f/your-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setIsSubmitting(false);

    if (data.ok) {
      setResponseMessage("Thank you! Your booking has been received.");
    } else {
      setResponseMessage("Something went wrong. Please try again.");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      whatsapp: false,
      optOut: false,
    });
  };

  // Form validation to ensure data is entered correctly
  const validateForm = () => {
    const { name, email, mobile, pincode } = formData;
    return (
      name &&
      email &&
      mobile &&
      pincode &&
      /^\d+$/.test(mobile) &&
      /^\d{6}$/.test(pincode)
    );
  };

  // Disable scroll when the form is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="absolute inset-0 z-50 bg-gray-900 bg-opacity-70 flex items-center justify-center">
      <div className="container mx-auto px-6 relative max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setOpenForm(false)}
            className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <MdClose />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Book Your Design Session
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">
              Enter Your Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="whatsapp"
              className="flex items-center text-gray-700"
            >
              <input
                type="checkbox"
                id="whatsapp"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleInputChange}
                className="mr-2"
              />
              You can reach me on WhatsApp/RCS
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="optOut" className="flex items-center text-gray-700">
              <input
                type="checkbox"
                id="optOut"
                name="optOut"
                checked={formData.optOut}
                onChange={handleInputChange}
                className="mr-2"
              />
              Uncheck to opt-out of upcoming meetings and offer alerts
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="pincode" className="block text-gray-700">
              Enter Your Current Residence Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#FFD700] text-white rounded-md hover:bg-yellow-500 transition duration-300"
          >
            {isSubmitting ? "Booking..." : "Book Design Session"}
          </button>

          {responseMessage && (
            <div className="mt-4 text-center text-sm text-gray-700">
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default DesignSessionForm;
