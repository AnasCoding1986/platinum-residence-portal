
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

const ContactCta = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-platinum-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=773&q=80"
                alt="Contact Platinum Residence Properties"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkblue/80 to-luxury-darkblue/40" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                <h3 className="font-cormorant text-2xl md:text-3xl font-bold mb-4">
                  Looking for your dream property in Sylhet?
                </h3>
                <p className="text-platinum-100 mb-6">
                  Contact our expert team today for a personalized consultation and let us help 
                  you find your perfect home or investment opportunity.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+8801712345678" 
                    className="flex items-center text-platinum-100 hover:text-white transition-colors"
                  >
                    <Phone size={18} className="mr-3 text-luxury-blue" />
                    <span>+880 1712 345678</span>
                  </a>
                  <a 
                    href="mailto:info@platinumresidence.com" 
                    className="flex items-center text-platinum-100 hover:text-white transition-colors"
                  >
                    <Mail size={18} className="mr-3 text-luxury-blue" />
                    <span>info@platinumresidence.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <div className="p-8 md:p-12">
              <motion.div variants={itemVariants}>
                <h4 className="font-cormorant text-2xl font-bold text-luxury-darkblue mb-6">
                  Get in Touch With Us
                </h4>
              </motion.div>
              
              <motion.form variants={itemVariants} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-platinum-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-platinum-200 focus:border-luxury-blue 
                        focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-platinum-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-md border border-platinum-200 focus:border-luxury-blue 
                        focus:outline-none transition-colors"
                      placeholder="+880 1XXXXXXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-platinum-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-platinum-200 focus:border-luxury-blue 
                      focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-platinum-700 mb-1">
                    I am interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-md border border-platinum-200 focus:border-luxury-blue 
                      focus:outline-none transition-colors"
                  >
                    <option value="">Select your interest</option>
                    <option value="buying">Buying a property</option>
                    <option value="renting">Renting a property</option>
                    <option value="selling">Selling my property</option>
                    <option value="investing">Real estate investment</option>
                    <option value="other">Other services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-platinum-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-platinum-200 focus:border-luxury-blue 
                      focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <CustomButton variant="gold" size="lg" type="submit">
                    Send Message
                    <ArrowRight className="ml-2" size={18} />
                  </CustomButton>
                  
                  <Link
                    to="/contact"
                    className="text-sm text-luxury-blue hover:text-luxury-darkblue 
                      hover:underline transition-colors"
                  >
                    More Contact Options
                  </Link>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCta;
