
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import AboutPreview from "../components/home/AboutPreview";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import ContactCta from "../components/home/ContactCta";
import { motion } from "framer-motion";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <FeaturedProperties />
        <AboutPreview />
        <TestimonialsCarousel />
        <ContactCta />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
