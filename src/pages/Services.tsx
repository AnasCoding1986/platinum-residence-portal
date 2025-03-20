import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Building, Key, Home, Paintbrush, Search, Users } from "lucide-react";
import CustomButton from "../components/ui/CustomButton";
import { motion } from "framer-motion";

const Services = () => {
  const { language, translations } = useLanguage();
  
  // Service cards data
  const services = [
    {
      icon: <Search className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Property Search' : 'প্রপার্টি অনুসন্ধান',
      description: language === 'en' 
        ? 'We help you find the perfect property that meets all your requirements and preferences.' 
        : 'আমরা আপনাকে আপনার সমস্ত প্রয়োজনীয়তা এবং পছন্দগুলি পূরণ করে এমন নিখুঁত প্রপার্টি খুঁজে পেতে সাহায্য করি।'
    },
    {
      icon: <Key className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Buying Assistance' : 'ক্রয় সহায়তা',
      description: language === 'en' 
        ? 'Our expert team guides you through the entire property buying process with ease.' 
        : 'আমাদের বিশেষজ্ঞ দল আপনাকে সম্পূর্ণ সম্পত্তি ক্রয় প্রক্রিয়ার মাধ্যমে সহজেই গাইড করে।'
    },
    {
      icon: <Building className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Property Management' : 'প্রপার্টি ম্যানেজমেন্ট',
      description: language === 'en' 
        ? 'We offer comprehensive property management services to maximize your investment returns.' 
        : 'আমরা আপনার বিনিয়োগ রিটার্ন সর্বাধিক করতে ব্যাপক প্রপার্টি ম্যানেজমেন্ট পরিষেবা অফার করি।'
    },
    {
      icon: <Home className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Rental Services' : 'ভাড়া পরিষেবা',
      description: language === 'en' 
        ? 'Find reliable tenants or the perfect rental property with our professional rental services.' 
        : 'আমাদের পেশাদার ভাড়া পরিষেবার মাধ্যমে নির্ভরযোগ্য ভাড়াটে বা নিখুঁত ভাড়া সম্পত্তি খুঁজুন।'
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Renovation' : 'সংস্কার',
      description: language === 'en' 
        ? 'Transform your property with our expert renovation and interior design services.' 
        : 'আমাদের বিশেষজ্ঞ সংস্কার এবং অভ্যন্তরীণ ডিজাইন পরিষেবাগুলির সাথে আপনার সম্পত্তি রূপান্তর করুন।'
    },
    {
      icon: <Users className="w-10 h-10 text-luxury-purple" />,
      title: language === 'en' ? 'Consultation' : 'পরামর্শ',
      description: language === 'en' 
        ? 'Get expert advice on real estate investments, market trends, and property valuations.' 
        : 'রিয়েল এস্টেট বিনিয়োগ, বাজারের প্রবণতা এবং সম্পত্তি মূল্যায়ন সম্পর্কে বিশেষজ্ঞ পরামর্শ পান।'
    }
  ];

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
                Our <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-platinum-100 text-lg mb-8">
                {language === "en"
                  ? "Comprehensive real estate services tailored to meet your needs with unparalleled expertise and dedication."
                  : "আপনার প্রয়োজন মেটাতে অতুলনীয় দক্ষতা এবং উৎসর্গের সাথে বিস্তৃত রিয়েল এস্টেট পরিষেবা।"}
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div 
                  key={service.id}
                  className="card-luxury h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="p-6">
                    <div className="w-14 h-14 bg-luxury-purple/10 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="text-luxury-purple" size={24} />
                    </div>
                    <h3 className="font-cormorant text-2xl font-bold mb-4">{service.title[language]}</h3>
                    <p className="text-platinum-600 mb-6">{service.description[language]}</p>
                    <CustomButton variant="gold" size="sm">
                      {language === "en" ? "Learn More" : "আরও জানুন"}
                    </CustomButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-platinum-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                {language === "en" ? "Why Choose Us" : "আমাদের কেন বেছে নেবেন"}
              </h2>
              <p className="text-platinum-600 max-w-2xl mx-auto">
                {language === "en"
                  ? "We pride ourselves on offering exceptional services that set us apart from the competition."
                  : "আমরা প্রতিযোগিতা থেকে আমাদের আলাদা করে দেয় এমন ব্যতিক্রমী পরিষেবা প্রদান করে গর্বিত।"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-luxury-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-luxury-purple" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {language === "en" ? "Expertise" : "বিশেষজ্ঞতা"}
                </h3>
                <p className="text-platinum-600 text-sm">
                  {language === "en"
                    ? "Over 15 years of experience in the Sylhet real estate market."
                    : "সিলেট রিয়েল এস্টেট মার্কেটে ১৫ বছরেরও বেশি অভিজ্ঞতা।"}
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-luxury-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Gem className="text-luxury-purple" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {language === "en" ? "Quality" : "মান"}
                </h3>
                <p className="text-platinum-600 text-sm">
                  {language === "en"
                    ? "Commitment to the highest standards in every property we offer."
                    : "আমরা যে প্রতিটি সম্পত্তি প্রদান করি তাতে সর্বোচ্চ মানের প্রতিশ্রুতি।"}
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-luxury-purple/10 rounded-full flex items-center justify-center mb-4">
                  <HeartHandshake className="text-luxury-purple" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {language === "en" ? "Trust" : "বিশ্বাস"}
                </h3>
                <p className="text-platinum-600 text-sm">
                  {language === "en"
                    ? "Building long-term relationships with our clients through transparency."
                    : "স্বচ্ছতার মাধ্যমে আমাদের ক্লায়েন্টদের সাথে দীর্ঘমেয়াদী সম্পর্ক গড়ে তোলা।"}
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-luxury-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="text-luxury-purple" size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {language === "en" ? "Support" : "সহায়তা"}
                </h3>
                <p className="text-platinum-600 text-sm">
                  {language === "en"
                    ? "24/7 customer service to address all your real estate needs."
                    : "আপনার সমস্ত রিয়েল এস্টেট প্রয়োজনীয়তা পূরণে ২৪/৭ গ্রাহক সেবা।"}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-luxury-darkblue relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-80 w-80 rounded-full bg-white/20 -bottom-40 -right-20" />
            <div className="absolute h-60 w-60 rounded-full bg-white/20 top-20 left-20" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-white mb-6">
                {language === "en"
                  ? "Ready to Experience Our Premium Services?"
                  : "আমাদের প্রিমিয়াম পরিষেবাগুলি অনুভব করতে প্রস্তুত?"}
              </h2>
              <p className="text-platinum-100 mb-8">
                {language === "en"
                  ? "Contact us today to schedule a consultation with one of our real estate experts."
                  : "আমাদের রিয়েল এস্টেট বিশেষজ্ঞদের একজনের সাথে পরামর্শ নিতে আজই যোগাযোগ করুন।"}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <CustomButton variant="gold">
                  {language === "en" ? "Get Started" : "শুরু করুন"}
                </CustomButton>
                <CustomButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 hover:text-white"
                >
                  {language === "en" ? "Learn More" : "আরও জানুন"}
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Services;

