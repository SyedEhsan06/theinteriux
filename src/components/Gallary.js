"use client";
import React, { useState } from "react";

// Quotes for interior design
const quotes = [
  "Good design is all about making the most of the space you have.",
  "Interior design is not just about arranging furniture; it's about creating a space where you feel at home.",
  "Design is not just what it looks like and feels like. Design is how it works.",
  "A room is not a room without natural light.",
  "The best rooms have something to say about the people who live in them.",
];

const Gallary = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("Kitchen");

  const gallaryInfo = [
    {
      header: "Kitchen",
      images: [
        "/gallary/1.jpeg",
        "/gallary/2.jpeg",
        "/gallary/3.jpeg",
        "/gallary/4.jpeg",
        "/gallary/5.jpeg",
        "/gallary/6.jpeg",
        "/gallary/7.jpeg",
        "/gallary/8.jpeg",
      ],
    },
    {
      header: "Bedroom",
      images: [
        "/gallary/16.jpeg",
        "/gallary/17.jpeg",
        "/gallary/18.jpeg",
        "/gallary/19.jpeg",
        "/gallary/20.jpeg",
        "/gallary/21.jpeg",
        "/gallary/22.jpeg",
      ],
    },
    {
      header: "Bathroom",
      images: [
        "/gallary/23.jpeg",
        "/gallary/24.jpeg",
        "/gallary/25.jpeg",
        "/gallary/26.jpeg",
        "/gallary/27.jpeg",
        "/gallary/28.jpeg",
      ],
    },
    {
      header: "Living",
      images: [
        "/gallary/9.jpeg",
        "/gallary/10.jpeg",
        "/gallary/11.jpeg",
        "/gallary/12.jpeg",
        "/gallary/13.jpeg",
        "/gallary/14.jpeg",
        "/gallary/15.jpeg",
      ],
    },
  ];

  // Get images for the selected category
  const selectedCategoryImages = gallaryInfo.find(
    (category) => category.header === selectedCategory
  )?.images || [];

  // Fill the grid with quotes if there are fewer than 8 images
  const imagesToDisplay = selectedCategoryImages.length >= 8 ? selectedCategoryImages : [...selectedCategoryImages, ...quotes.slice(0, 8 - selectedCategoryImages.length)];

  return (
    <section id="gallary" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-primary mb-8 text-center">Our Gallery</h2>

        {/* Category Header - Select Category */}
        <div className="w-full mb-6">
          {/* Grid Layout for Category Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
            {gallaryInfo.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(item.header)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-lg ${
                  selectedCategory === item.header
                    ? "bg-primary text-white"
                    : "bg-neutral-700 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {item.header}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {/* Loop through images and quotes to display */}
          {imagesToDisplay.map((item, index) => {
            const isImage = item.startsWith("/gallary/"); // Check if the item is an image
            return (
              <div
                key={index}
                className={`relative overflow-hidden border border-neutral-700 rounded-lg h-[210px] sm:h-[270px] transition-transform duration-500 transform md:hover:scale-105`}
              >
                {isImage ? (
                  <img
                    src={item}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out transform md:hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full p-4 bg-primary text-white text-center text-sm sm:text-lg">
                    <p>"{item}"</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
