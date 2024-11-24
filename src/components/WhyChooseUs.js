import React from 'react';
import { FaGem, FaCogs, FaHandsHelping, FaClock } from 'react-icons/fa'; // React Icons
import { MdKitchen } from 'react-icons/md'; // Icon for Kitchen

const WhyChooseUs = () => {
  return (
    <div>
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Why Choose The Interiux?</h2>
          <p className="text-lg text-[#333333] mb-8 max-w-3xl mx-auto">
            The Interiux is a premier interior design firm dedicated to transforming your living spaces into exquisite havens that reflect your unique style and personality. We specialize in creating premium, luxury interiors that are both functional and aesthetically pleasing. Here's why you should choose us for your dream space:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Affordable Luxury */}
            <div className="bg-[#FFD700] p-6 rounded-lg shadow-lg text-[#333333] hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">
                <FaGem />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Luxury</h3>
              <p>
                We believe that everyone deserves to experience the beauty and comfort of a luxurious interior. Our commitment to affordability ensures that you can indulge in your dream space without breaking the bank.
              </p>
            </div>

            {/* Personalized Design */}
            <div className="bg-[#D4AF37] p-6 rounded-lg shadow-lg text-[#333333] hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Design</h3>
              <p>
                Your home is a reflection of your individuality. Our design process is centered around your unique preferences and lifestyle, ensuring your space is tailored to your exact needs.
              </p>
            </div>

            {/* Timely Delivery */}
            <div className="bg-[#8B4513] p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p>
                We prioritize efficient project management, ensuring your dream interior is realized within your desired timeframe, without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Kitchen Design Section */}
      <section className="py-16 bg-[#556B2F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Elevate Your Culinary Experience</h2>
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
            Transform your kitchen into a culinary masterpiece with The Interiux's stunning luxury kitchen designs. Featuring sleek countertops, soft-close cabinets, and ambient lighting, we create havens for both cooking and entertaining. Experience the fusion of design and functionality, tailored just for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#32CD32] p-8 rounded-lg shadow-lg text-white">
              <div className="text-4xl mb-4">
                <MdKitchen />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Kitchen Designs</h3>
              <p>
                Soft-close cabinets, sleek countertops, and ambient lighting come together to create a luxurious, functional kitchen designed for entertaining and daily use.
              </p>
            </div>

            <div className="bg-[#8B4513] p-8 rounded-lg shadow-lg text-white">
              <div className="text-4xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
              <p>
                From consultation to final installation, we are with you every step of the way to ensure that your kitchen is a space that reflects your style, needs, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
