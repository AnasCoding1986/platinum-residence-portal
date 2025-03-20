
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Search, MapPin } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      setOffset(scrollY * 0.5); // Adjust the multiplier for parallax intensity
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${offset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkblue/90 to-luxury-darkblue/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-10 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <h5 className="inline-block bg-luxury-blue/30 backdrop-blur-sm px-4 py-1.5 rounded-full 
              text-xs font-semibold mb-6">
              PREMIUM REAL ESTATE IN SYLHET
            </h5>
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Discover Your <span className="bg-gradient-purple bg-clip-text text-transparent">Perfect Property</span> in Sylhet
            </h1>
            <p className="text-platinum-100 text-base sm:text-lg mb-8 max-w-xl">
              Platinum Residence Properties offers an exclusive collection of premium 
              properties in the most sought-after locations in Sylhet, Bangladesh.
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="gold" size="lg">
                Explore Properties
                <ChevronRight className="ml-2" size={18} />
              </CustomButton>
              <CustomButton variant="outline" size="lg" className="border-white text-white 
                hover:bg-white/10 hover:text-white focus:ring-white">
                Learn More
              </CustomButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-xl p-6 backdrop-blur-lg max-w-lg mx-auto lg:ml-auto w-full"
          >
            <div className="mb-6">
              <h3 className="text-white font-cormorant text-2xl font-semibold mb-2">
                Find Your Dream Property
              </h3>
              <p className="text-platinum-100 text-sm">
                Search from our exclusive collection of properties
              </p>
            </div>

            {/* Search Type Tabs */}
            <div className="flex mb-6 bg-luxury-blue/20 p-1 rounded-lg">
              <button
                onClick={() => setSearchType("buy")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  searchType === "buy"
                    ? "bg-white text-luxury-darkblue"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType("rent")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  searchType === "rent"
                    ? "bg-white text-luxury-darkblue"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Form */}
            <form className="space-y-4">
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-platinum-400" size={18} />
                  <input
                    type="text"
                    placeholder="Enter location or property name"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder:text-platinum-300 
                      rounded-lg border border-white/20 focus:border-luxury-blue focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select
                    className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border 
                      border-white/20 focus:border-luxury-blue focus:outline-none transition-all"
                  >
                    <option value="" className="text-platinum-900">Property Type</option>
                    <option value="apartment" className="text-platinum-900">Apartment</option>
                    <option value="house" className="text-platinum-900">House</option>
                    <option value="villa" className="text-platinum-900">Villa</option>
                    <option value="commercial" className="text-platinum-900">Commercial</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border 
                      border-white/20 focus:border-luxury-blue focus:outline-none transition-all"
                  >
                    <option value="" className="text-platinum-900">Budget</option>
                    <option value="1" className="text-platinum-900">৳50L - ৳1CR</option>
                    <option value="2" className="text-platinum-900">৳1CR - ৳2CR</option>
                    <option value="3" className="text-platinum-900">৳2CR - ৳5CR</option>
                    <option value="4" className="text-platinum-900">Above ৳5CR</option>
                  </select>
                </div>
              </div>

              <CustomButton variant="gold" size="lg" fullWidth>
                <Search className="mr-2" size={18} />
                Search Properties
              </CustomButton>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
