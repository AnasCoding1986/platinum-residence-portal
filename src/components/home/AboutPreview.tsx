
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const containerVariants = {
    hidden: {},
    visible: {
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

  const benefitsList = [
    "Premium property selection in prime locations",
    "Expert market knowledge of Sylhet real estate",
    "Personalized service tailored to your needs",
    "Transparent and ethical business practices",
    "Comprehensive support throughout the process",
  ];

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                alt="Platinum Residence Properties Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute left-[-10%] bottom-[-10%] w-[70%] h-[70%] 
                bg-gradient-luxury rounded-lg -z-10"
            />
            <div 
              className="absolute right-[-5%] top-[-5%] w-[50%] h-[50%] 
                bg-gradient-gold rounded-lg -z-10 opacity-80"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <h5 className="inline-block bg-luxury-blue/10 text-luxury-blue px-4 py-1.5 rounded-full 
                text-xs font-semibold mb-3">
                ABOUT US
              </h5>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-luxury-darkblue mb-4">
                Redefining Luxury Living in Sylhet
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-platinum-600 mb-6"
            >
              Platinum Residence Properties is Sylhet's premier real estate company, 
              specializing in luxury properties. With our deep local knowledge and commitment 
              to excellence, we help clients find their perfect home or investment opportunity 
              in one of Bangladesh's most promising real estate markets.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="space-y-3 mb-8"
            >
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 text-luxury-blue flex-shrink-0" size={18} />
                  <p className="text-platinum-700">{benefit}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="primary" size="lg">
                  <Link to="/about" className="flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </CustomButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
