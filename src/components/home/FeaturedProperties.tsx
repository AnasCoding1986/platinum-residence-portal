
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PropertyCard from "../ui/PropertyCard";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

// Example featured properties data
const featuredProperties = [
  {
    id: "prop1",
    title: "Luxury Villa with Garden",
    location: "Upashahar, Sylhet",
    price: "৳2.5 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sqft",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "prop2",
    title: "Modern Apartment in City Center",
    location: "Zindabazar, Sylhet",
    price: "৳1.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sqft",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "prop3",
    title: "Riverfront Residential Plot",
    location: "Shahjalal Uposhohor, Sylhet",
    price: "৳85 Lac",
    bedrooms: 0,
    bathrooms: 0,
    area: "5,000 sqft",
    imageUrl: "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: "prop4",
    title: "Elegant Townhouse",
    location: "South Surma, Sylhet",
    price: "৳1.8 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sqft",
    imageUrl: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const FeaturedProperties = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollable = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 400; // Adjust scroll amount as needed
    const newScrollLeft =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollable);
    }
    
    return () => {
      window.removeEventListener("resize", checkScrollable);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollable);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-platinum-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h5 className="inline-block bg-luxury-purple/10 text-luxury-purple px-4 py-1.5 rounded-full 
            text-xs font-semibold mb-3">
            FEATURED PROPERTIES
          </h5>
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-luxury-darkblue mb-4">
            Exclusive Real Estate Opportunities
          </h2>
          <p className="text-platinum-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties that represent the finest 
            real estate opportunities in Sylhet.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-16 right-0 flex space-x-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                ${
                  canScrollLeft
                    ? "bg-luxury-purple text-white hover:bg-luxury-darkpurple"
                    : "bg-platinum-200 text-platinum-400 cursor-not-allowed"
                }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                ${
                  canScrollRight
                    ? "bg-luxury-purple text-white hover:bg-luxury-darkpurple"
                    : "bg-platinum-200 text-platinum-400 cursor-not-allowed"
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProperties.map((property) => (
              <div key={property.id} className="min-w-[280px] sm:min-w-[340px] flex-shrink-0">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <CustomButton 
            variant="primary" 
            size="lg" 
            href="/properties"
          >
            View All Properties
            <ChevronRight className="ml-2" size={18} />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
