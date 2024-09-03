import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow'
import PricingSection from './Components/PricingSection'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-x-7xl mx-auto pt-20 px-6">
        <Hero/>
        <FeatureSection/>
        <WorkFlow/>
        <PricingSection/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  )
}

export default App