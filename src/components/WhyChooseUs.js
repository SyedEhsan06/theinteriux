"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper base styles
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { FaGem, FaCogs, FaHandsHelping, FaClock } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-background to-primary">
      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
            Why Choose The Interiux?
          </h2>
          <p className="text-lg text-secondary mb-16 max-w-2xl mx-auto">
            The Interiux is a premier interior design firm dedicated to
            transforming your living spaces into exquisite havens that reflect
            your unique style and personality. We specialize in creating
            premium, luxury interiors that are both functional and aesthetically
            pleasing.
          </p>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination]} // Use Swiper modules
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {/* Slides */}
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-80 flex flex-col justify-between items-center">
                  <div className="text-6xl text-primary mb-4">
                    {/* Dynamic Icon */}
                    {index === 0 && <FaGem />}
                    {index === 1 && <FaCogs />}
                    {index === 2 && <FaClock />}
                    {index === 3 && <MdKitchen />}
                    {index === 4 && <FaHandsHelping />}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3 text-center">
                    {
                      [
                        "Affordable Luxury",
                        "Personalized Design",
                        "Timely Delivery",
                        "Premium Kitchen Designs",
                        "End-to-End Service",
                      ][index]
                    }
                  </h3>
                  <p className="text-sm text-neutral text-center leading-relaxed">
                    {
                      [
                        "We believe everyone deserves the beauty and comfort of a luxurious interior. Our commitment to affordability ensures you can indulge in your dream space without breaking the bank.",
                        "Your home is a reflection of your individuality. Our design process is centered around your unique preferences and lifestyle, ensuring your space is tailored to your exact needs.",
                        "We prioritize efficient project management, ensuring your dream interior is realized within your desired timeframe, without delays.",
                        "Soft-close cabinets, sleek countertops, and ambient lighting come together to create a luxurious, functional kitchen designed for entertaining and daily use.",
                        "From consultation to final installation, we are with you every step of the way to ensure that your kitchen reflects your style, needs, and lifestyle.",
                      ][index]
                    }
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
