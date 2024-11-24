// /components/Hero.js
import React from 'react';
import FormOpenButton from './FormOpenButton';
import Link from 'next/link';
const Hero = () => {
  
  return (
    <section className="relative bg-cover bg-[#FFD700] bg-center h-screen" style={{ backgroundImage: "url('/gallary/1.jpeg')" }}>
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {/* Box 1 - Large Box */}
        <div 
          className="col-span-3 row-span-2 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/1.jpeg')" }}
        ></div>

        {/* Box 2 - Medium Box */}
        <div 
          className="col-span-2 row-span-3 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/2.jpeg')" }}
        ></div>

        {/* Box 3 - Small Box */}
        <div 
          className="col-span-1 row-span-1 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/3.jpeg')" }}
        ></div>

        {/* Box 4 - Medium Box */}
        <div 
          className="col-span-2 row-span-1 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/4.jpeg')" }}
        ></div>

        {/* Box 5 - Large Box */}
        <div 
          className="col-span-4 row-span-3 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/5.jpeg')" }}
        ></div>

        {/* Box 6 - Small Box */}
        <div 
          className="col-span-1 row-span-2 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/6.jpeg')" }}
        ></div>

        {/* Box 7 - Medium Box */}
        <div 
          className="col-span-2 row-span-2 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/7.jpeg')" }}
        ></div>

        {/* Box 8 - Small Box */}
        <div 
          className="col-span-1 row-span-1 h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/gallary/8.jpeg')" }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6 md:px-12">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          Affordable Luxury for Your Dream Home
        </h1>
        {/* Subtext Section */}
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Transform your space with our bespoke interior designs. Experience luxury that fits your budget.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 space-x-4 flex flex-col sm:flex-row justify-center">
          {/* View Portfolio Button */}
          <a href={'#gallary'}>
          <button
            
          className="bg-[#FFD700] text-black hover:bg-yellow-500 hover:scale-105 transition transform duration-300 px-8 py-4 rounded-full font-semibold shadow-lg focus:outline-none">
            View Portfolio
          </button>
          </a>

          {/* Book Consultation Button */}
          <FormOpenButton
            text={"Book Consultation"}
          className={`bg-white text-[#FFD700] border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-white hover:scale-105 transition transform duration-300 mt-4 sm:mt-0 sm:ml-4 px-8 py-4 rounded-full font-semibold shadow-lg focus:outline-none`} />
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
