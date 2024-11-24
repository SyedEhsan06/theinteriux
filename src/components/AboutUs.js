// /app/about/page.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <p className="text-lg text-gray-600 mb-4">
          The Interiux is a premier interior design firm dedicated to transforming your living spaces into exquisite havens that reflect your unique style and personality. We specialize in creating premium and luxury interiors that are both functional and aesthetically pleasing. Our team of skilled designers and craftsmen are passionate about bringing your dream interior to life, paying meticulous attention to every detail, from concept to completion.
        </p>
        
        <h2 className="text-2xl font-semibold text-center mb-4">What Sets Us Apart</h2>
        <ul className="space-y-4 text-gray-600">
          <li><strong>Affordable Luxury:</strong> We believe that everyone deserves to experience the beauty and comfort of a luxurious interior. Our commitment to affordability ensures that you can indulge in your dream space without breaking the bank.</li>
          <li><strong>Personalized Design:</strong> We understand that your home is a reflection of your individuality. Our design process is centered around your unique preferences and lifestyle, ensuring that your space is tailored to your exact needs.</li>
          <li><strong>Premium Quality:</strong> We source only the finest materials and work with skilled artisans to deliver exceptional quality in every aspect of our projects.</li>
          <li><strong>Timely Delivery:</strong> We prioritize efficient project management to ensure that your dream interior is realized within your desired timeframe.</li>
          <li><strong>Exceptional Customer Service:</strong> Your satisfaction is our top priority. We maintain open communication throughout the design and execution process, keeping you informed and involved every step of the way.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-center mt-8 mb-4">Our Services</h2>
        <ul className="space-y-4 text-gray-600">
          <li><strong>Interior Design Consultation:</strong> Our expert designers will work closely with you to understand your vision and create a personalized design plan.</li>
          <li><strong>Space Planning:</strong> We optimize your space to maximize functionality and aesthetics.</li>
          <li><strong>Furniture Selection:</strong> We curate a selection of premium furniture pieces to complement your design style.</li>
          <li><strong>Material Sourcing:</strong> We source high-quality materials and finishes to elevate your interior.</li>
          <li><strong>Project Management:</strong> Our team oversees every aspect of the project, from design to installation, ensuring seamless execution.</li>
        </ul>

        <p className="mt-8 text-lg text-center">
          Experience the Interiux difference: Let us transform your house into a home that reflects your individuality and inspires you every day. 
          <br />
          <a href="#contact" className="text-gold font-semibold hover:underline">Contact us today to schedule a consultation!</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
