import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallary'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <CTASection />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default page