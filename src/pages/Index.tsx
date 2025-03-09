
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import AboutPreview from "../components/home/AboutPreview";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import ContactCta from "../components/home/ContactCta";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <AboutPreview />
        <TestimonialsCarousel />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
