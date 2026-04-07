import { Head, Link } from '@inertiajs/react';

import ScrollToTop from '@/Components/ScrollToTop';
import Hero from '@/M&M/Hero';
import SecurityAbout from '@/M&M/Securityabout';
import Products from '@/M&M/Products';
import WhyChooseUs from '@/M&M/WhyChooseUs';
import Services from '@/M&M/Services';
import Project from '@/M&M/Project';
import ContactBanner from '@/M&M/ContactBanner';
import Testimonials from '@/M&M/Testimonials';
import FAQ from '@/M&M/FAQ';

export default function Welcome({}) {
  return (
        <>
            <Head title="Welcome" />
         <Hero/>
   <SecurityAbout/>
   <Products/>
   <WhyChooseUs/>
   <Services/>
    <Project/>
    <ContactBanner/>
    <Testimonials/>
    <FAQ/>
        
           <ScrollToTop/>
        </>
    );
}
