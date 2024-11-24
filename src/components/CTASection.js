// /components/CTASection.js
import React from 'react';

export default function CTASection() {
  return (
    <section id="contact" className="py-16 bg-[#FFD700] text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">Our expert designers are ready to bring your vision to life. Let’s work together!</p>
        <a
          href="#contact-form"
          className="bg-white text-[#FFD700] px-6 py-3 rounded-lg font-medium hover:bg-[#FFD700] hover:text-white transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
