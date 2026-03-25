import ContactBanner from '@/M&M/ContactBanner'
import FAQ from '@/M&M/FAQ'
import Hero from '@/M&M/Hero'
import Products from '@/M&M/Products'
import Project from '@/M&M/Project'
import SecurityAbout from '@/M&M/Securityabout'
import Services from '@/M&M/Services'
import Testimonials from '@/M&M/Testimonials'
import WhyChooseUs from '@/M&M/WhyChooseUs'

const Home = () => {
  return (
   <>
   <Hero/>
   <SecurityAbout/>
   <Products/>
   <WhyChooseUs/>
   <Services/>
    <Project/>
    <ContactBanner/>
    <Testimonials/>
    <FAQ/>
   </>
  )
}

export default Home
