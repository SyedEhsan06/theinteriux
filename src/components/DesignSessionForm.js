"use client";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const DesignSessionForm = ({ setOpenForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: false,
    optOut: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  console.log("DesignSessionForm");

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
      whatsapp: false,
      optOut: false,
    });
  };

  // Form validation to ensure data is entered correctly
  const validateForm = () => {
    const { name, email, mobile } = formData;
    return (
      name &&
      email &&
      mobile &&
      /^\d+$/.test(mobile) &&
      /\S+@\S+\.\S+/.test(email) // Added email validation regex
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
    <section className="absolute w-screen h-screen inset-0 z-[9999] bg-background bg-opacity-70 flex items-center justify-center">
      <div className="container mx-auto px-6 relative max-w-xl bg-white p-8 rounded-xl shadow-xl">
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setOpenForm(false)}
            className="text-secondary bg-foreground p-2 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <MdClose />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center text-primary mb-6">
            Book Your Design Session
          </h2>

          <div className="mb-6">
            <label htmlFor="name" className="block text-foreground font-medium">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mobile" className="block text-foreground font-medium">
              Enter Your Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-foreground font-medium">
              Enter Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          {/* Checkbox at the end */}
          <div className="mb-6 flex items-center justify-start">
            <input
              type="checkbox"
              id="whatsapp"
              name="whatsapp"
              checked={formData.whatsapp}
              onChange={handleInputChange}
              className="mr-4 w-5 h-5 text-primary border-gray-300 rounded-sm"
            />
            <label htmlFor="whatsapp" className="text-foreground text-sm">
              You can reach me on WhatsApp/RCS
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-focus transition duration-300"
          >
            {isSubmitting ? "Booking..." : "Get Free Quote"}
          </button>

          {responseMessage && (
            <div className="mt-4 text-center text-sm text-foreground">
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default DesignSessionForm;
