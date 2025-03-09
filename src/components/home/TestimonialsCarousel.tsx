
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "Farid Ahmed",
    role: "Property Buyer",
    content:
      "Working with Platinum Residence Properties was a true pleasure. They helped us find our dream home in Sylhet within our budget. Their expertise and local knowledge were invaluable throughout the process.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Investor",
    content:
      "As an investor, I needed a team that understood the Sylhet real estate market inside out. The team at Platinum Residence exceeded my expectations with their market insights and personalized service.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Mohammed Rahman",
    role: "Property Seller",
    content:
      "I entrusted Platinum Residence to sell my family property, and they managed the entire process with professionalism and dedication. They secured an excellent deal in a short timeframe.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [autoplay, setAutoplay] = useState(true);

  // Navigation functions
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
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

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Slide variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  // Track slide direction
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (newDirection === 1) {
      nextSlide();
    } else {
      prevSlide();
    }
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-gradient-luxury text-white relative overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <Quote size={500} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <motion.h5 
            variants={itemVariants}
            className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full 
              text-xs font-semibold mb-3"
          >
            TESTIMONIALS
          </motion.h5>
          <motion.h2 
            variants={itemVariants}
            className="font-cormorant text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-platinum-200 max-w-2xl mx-auto"
          >
            Hear from our satisfied clients about their experience working with Platinum Residence Properties.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative h-[350px] sm:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="h-full flex flex-col justify-center items-center text-center p-4">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <Quote className="w-10 h-10 mb-4 text-white/30" />
                  <p className="text-lg sm:text-xl mb-6 max-w-2xl">
                    {testimonials[activeIndex].content}
                  </p>
                  <h4 className="font-cormorant text-xl font-semibold">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-platinum-300">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full flex items-center justify-center 
                bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full flex items-center justify-center 
                bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
