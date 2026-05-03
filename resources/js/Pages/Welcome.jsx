import { Head } from '@inertiajs/react';

import ScrollToTop from '@/Components/ScrollToTop';
import Hero from '@/M&M/Hero';
import SecurityAbout from '@/M&M/Securityabout';
import Products from '@/M&M/Products';
import WhyChooseUs from '@/M&M/WhyChooseUs';
// import Services from '@/M&M/Services';
import Project from '@/M&M/Project';
import ContactBanner from '@/M&M/ContactBanner';
// import Testimonials from '@/M&M/Testimonials';
import FAQ from '@/M&M/FAQ';

const SEO = {
  title: 'Micro & Mega | Security Systems & Industrial Solutions',
  description:
    'Micro & Mega provides advanced security systems, industrial products, and professional services in Nepal.',
  url: 'https://micronmega.saitsolution.com.np/',
  image: 'https://micronmega.saitsolution.com.np/images/og-image.jpg', // add a real OG image
};

export default function Welcome() {
  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta
          name="keywords"
          content="security system Nepal, industrial solutions, CCTV, automation, Micro and Mega"
        />
        <link rel="canonical" href={SEO.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO.url} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SEO.url} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.image} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>

      <Hero />
      <SecurityAbout />
      <Products />
      <WhyChooseUs />
      {/* <Services /> */}
      <Project />
      <ContactBanner />
      {/* <Testimonials /> */}
      <FAQ />
      <ScrollToTop />
    </>
  );
}