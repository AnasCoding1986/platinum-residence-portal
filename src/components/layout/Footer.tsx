
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from "lucide-react";
import CustomButton from "../ui/CustomButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-luxury-darkblue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="mr-2">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                  <span className="text-luxury-darkblue font-cormorant text-xl font-bold">P</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-cormorant text-xl font-bold leading-none">
                  Platinum
                </h3>
                <p className="text-xs text-platinum-300 tracking-wider">
                  RESIDENCE PROPERTIES
                </p>
              </div>
            </Link>
            <p className="text-platinum-300 text-sm">
              Redefining luxury living in Sylhet, Bangladesh. We offer unparalleled real estate 
              services, connecting you with the finest properties in the region.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-luxury-blue/20 flex items-center justify-center 
                  transition-colors hover:bg-luxury-blue"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-luxury-blue/20 flex items-center justify-center 
                  transition-colors hover:bg-luxury-blue"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-luxury-blue/20 flex items-center justify-center 
                  transition-colors hover:bg-luxury-blue"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-luxury-blue/20 flex items-center justify-center 
                  transition-colors hover:bg-luxury-blue"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-cormorant font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Properties', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-platinum-300 text-sm hover:text-white transition-colors 
                      flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2 text-luxury-blue" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-cormorant font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-luxury-blue flex-shrink-0" />
                <span className="text-sm text-platinum-300">
                  123 Zindabazar Road, Sylhet 3100, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-luxury-blue flex-shrink-0" />
                <a href="tel:+8801712345678" className="text-sm text-platinum-300 hover:text-white transition-colors">
                  +880 1712 345678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-luxury-blue flex-shrink-0" />
                <a href="mailto:info@platinumresidence.com" className="text-sm text-platinum-300 hover:text-white transition-colors">
                  info@platinumresidence.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-cormorant font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-platinum-300 mb-4">
              Subscribe to our newsletter and receive the latest property updates
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2.5 rounded-md bg-luxury-blue/20 text-white 
                  placeholder:text-platinum-400 border border-luxury-blue/30 focus:border-luxury-blue 
                  outline-none transition-all"
              />
              <CustomButton variant="gold" fullWidth type="submit">
                Subscribe
              </CustomButton>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-luxury-blue/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-platinum-400">
            &copy; {currentYear} Platinum Residence Properties. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-platinum-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-platinum-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
