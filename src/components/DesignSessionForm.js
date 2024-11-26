"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import Swal from 'sweetalert2';

const DesignSessionForm = ({ setOpenForm }) => {
  const formRef = useRef(null); // Ref for the form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    const formData = new FormData(form);

    // Prepare data for submission
    const data = {
      Name: formData.get("Name"),
      Phone: formData.get("Phone"),
      Email: formData.get("Email"),
      WhatsApp: formData.get("WhatsApp") || "No", // Default to "No" if no selection
    };

    // Validate the form data before submitting
    if (!validateForm(data)) {
      setResponseMessage("Please fill in all fields correctly.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwHIHGD6OMYjDftzdxO35Tfwr9TXV6siQA1XpwndKXcS51JvDwcpOJOof-PKP-Ga5AOyg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Form submission response:", result);

      if (result.result === "success") {

        setResponseMessage("Thank you! Your booking has been received.");
        form.reset(); // Reset the form after successful submission

        // Show success popup with SweetAlert2
        Swal.fire({
          icon: 'success',
          zindex: 9999,
          title: 'Booking Received!',
          text: 'Your design session has been successfully booked.',
          confirmButtonText: 'OK',
          color:'#e1b544', 
          background:'#1f1f1f'
          });
        setOpenForm(false); // Close the form after successful submission
      } else {
        setResponseMessage(result.message || "Something went wrong. Please try again.");
        
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("There was a problem submitting the form. Please try again.");

      // Show error popup with SweetAlert2
      Swal.fire({
        icon: 'error',
        zindex: 9999,
          background:'#1f1f1f',
          color:'red',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonText: 'OK',
        
      });
      setOpenForm(false); // Close the form after successful submission
    }

    setIsSubmitting(false);
  };

  // Validate the form data
  const validateForm = (data) => {
    const { Name, Email, Phone } = data;
    return (
      Name &&
      Email &&
      Phone &&
      /^\d+$/.test(Phone) && // Validate that the phone number is numeric
      /\S+@\S+\.\S+/.test(Email) // Validate email format
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="absolute w-screen h-screen inset-0 z-50 bg-background bg-opacity-70 flex items-center justify-center">
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
        <form ref={formRef} onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center text-primary mb-6">
            Book Your Design Session
          </h2>

          <div className="mb-6">
            <label htmlFor="Name" className="block text-foreground font-medium">
              Enter Your Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Phone" className="block text-foreground font-medium">
              Enter Your phone Number
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="Email" className="block text-foreground font-medium">
              Enter Your Email Address
            </label>
            <input
              type="Email"
              id="Email"
              name="Email"
              required
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-focus transition duration-300"
            />
          </div>

          <div className="mb-6 flex items-center justify-start">
            <input
              type="checkbox"
              id="WhatsApp"
              name="WhatsApp"
              className="mr-4 w-5 h-5 text-primary border-gray-300 rounded-sm"
            />
            <label htmlFor="WhatsApp" className="text-foreground text-sm">
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
