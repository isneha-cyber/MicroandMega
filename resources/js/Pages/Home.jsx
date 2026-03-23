import ContactBanner from '@/M&M/ContactBanner'
import FAQ from '@/M&M/FAQ'
import Footer from '@/M&M/Footer'
import Hero from '@/M&M/Hero'
import Navbar from '@/M&M/Navbar'
import Products from '@/M&M/Products'
import Projects from '@/M&M/Project'
import SecurityAbout from '@/M&M/Securityabout'
import Services from '@/M&M/Services'
import Testimonials from '@/M&M/Testimonials'
import WhyChooseUs from '@/M&M/WhyChooseUs'
import ScrollToTop from '@/Components/ScrollToTop'
import React from 'react'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <SecurityAbout/>
   <Products/>
   <WhyChooseUs/>
   <Services/>
    <Projects/>
    <ContactBanner/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    <ScrollToTop/>
  
   
   </>
  )
}

export default Home
