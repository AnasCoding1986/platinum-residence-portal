import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";
import CustomButton from "../components/ui/CustomButton";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader2 from "../components/ui/Loader2";

const Contact = () => {
  const { language, translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <motion.main 
        className="flex-grow pt-24 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-luxury-darkblue py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-80 w-80 rounded-full bg-white/20 -top-40 -left-20" />
            <div className="absolute h-60 w-60 rounded-full bg-white/20 top-40 right-20" />
            <div className="absolute h-40 w-40 rounded-full bg-white/20 bottom-10 left-1/3" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-gradient-gold">Contact</span> Us
              </h1>
              <p className="text-platinum-100 text-lg mb-8">
                {language === "en"
                  ? "We're here to answer any questions you have about our properties and services. Reach out to us, and we'll respond as soon as we can."
                  : "আমাদের প্রোপার্টি এবং সেবা সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর দিতে আমরা এখানে আছি। আমাদের সাথে যোগাযোগ করুন, এবং আমরা যত তাড়াতাড়ি সম্ভব আপনাকে উত্তর দেব।"}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-6">
                  {language === "en" ? "Send us a message" : "আমাদের একটি বার্তা পাঠান"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-platinum-700 mb-1">
                        {language === "en" ? "Full Name" : "পূর্ণ নাম"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-blue"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-platinum-700 mb-1">
                        {language === "en" ? "Email Address" : "ইমেইল ঠিকানা"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-blue"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-platinum-700 mb-1">
                      {language === "en" ? "Subject" : "বিষয়"}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-platinum-700 mb-1">
                      {language === "en" ? "Message" : "বার্তা"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-platinum-300 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-blue"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <CustomButton variant="gold" type="submit" className="w-full sm:w-auto">
                      {formSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 className="animate-spin mr-2" size={18} />
                          {language === "en" ? "Sending..." : "পাঠানো হচ্ছে..."}
                        </span>
                      ) : (
                        language === "en" ? "Send Message" : "বার্তা পাঠান"
                      )}
                    </CustomButton>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-luxury-darkblue text-white rounded-xl p-8 mb-8">
                  <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-6">
                    {language === "en" ? "Contact Information" : "যোগাযোগের তথ্য"}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="text-luxury-purple" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white text-lg mb-1">
                          {language === "en" ? "Office Address" : "অফিসের ঠিকানা"}
                        </h3>
                        <p className="text-platinum-300">
                          123 Zindabazar Road, <br />
                          Sylhet 3100, Bangladesh
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="text-luxury-purple" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white text-lg mb-1">
                          {language === "en" ? "Phone Number" : "ফোন নম্বর"}
                        </h3>
                        <p className="text-platinum-300">+880 1712 345678</p>
                        <p className="text-platinum-300">+880 1912 345678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="text-luxury-purple" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white text-lg mb-1">
                          {language === "en" ? "Email Address" : "ইমেল ঠিকানা"}
                        </h3>
                        <p className="text-platinum-300">info@platinumresidence.com</p>
                        <p className="text-platinum-300">support@platinumresidence.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="text-luxury-purple" size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-white text-lg mb-1">
                          {language === "en" ? "Business Hours" : "ব্যবসায়িক সময়"}
                        </h3>
                        <p className="text-platinum-300">
                          {language === "en" 
                            ? "Monday - Friday: 9:00 AM - 6:00 PM" 
                            : "সোমবার - শুক্রবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০"}
                        </p>
                        <p className="text-platinum-300">
                          {language === "en" 
                            ? "Saturday: 10:00 AM - 4:00 PM" 
                            : "শনিবার: সকাল ১০:০০ - বিকাল ৪:০০"}
                        </p>
                        <p className="text-platinum-300">
                          {language === "en" 
                            ? "Sunday: Closed" 
                            : "রবিবার: বন্ধ"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-6">
                    {language === "en" ? "Follow Us" : "আমাদের অনুসরণ করুন"}
                  </h2>
                  <p className="text-platinum-600 mb-4">
                    {language === "en"
                      ? "Connect with us on social media for the latest updates on new properties and real estate insights."
                      : "নতুন প্রোপার্টি এবং রিয়েল এস্টেট ইনসাইট সম্পর্কে সর্বশেষ আপডেটের জন্য সোশ্যাল মিডিয়ায় আমাদের সাথে সংযুক্ত থাকুন।"}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-luxury-darkblue/10 flex items-center justify-center 
                        transition-colors hover:bg-luxury-darkblue hover:text-white"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-luxury-darkblue/10 flex items-center justify-center 
                        transition-colors hover:bg-luxury-darkblue hover:text-white"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-luxury-darkblue/10 flex items-center justify-center 
                        transition-colors hover:bg-luxury-darkblue hover:text-white"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-luxury-darkblue/10 flex items-center justify-center 
                        transition-colors hover:bg-luxury-darkblue hover:text-white"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.975742191286!2d91.86002216716271!3d24.89967264255218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0x866932a3a144bee5!2sZindabazar%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1714387530544!5m2!1sen!2sbd"
                className="w-full h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;
