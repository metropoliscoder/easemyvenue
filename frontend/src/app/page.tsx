import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedVenues from "../components/home/FeaturedVenues";
import WhyUs from "../components/home/WhyUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedVenues />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}