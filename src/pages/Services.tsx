
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Building, Key, Home, Paintbrush, Search, Users } from "lucide-react";
import CustomButton from "../components/ui/CustomButton";

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
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-luxury-darkblue to-luxury-blue py-16 text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              {language === 'en' ? 'Our Services' : 'আমাদের সেবাসমূহ'}
            </h1>
            <p className="text-lg max-w-2xl">
              {language === 'en' 
                ? 'Discover our comprehensive range of real estate services designed to meet all your property needs in Sylhet.' 
                : 'সিলেটে আপনার সমস্ত সম্পত্তি চাহিদা পূরণ করতে ডিজাইন করা আমাদের ব্যাপক রিয়েল এস্টেট পরিষেবাগুলি আবিষ্কার করুন।'}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-platinum-200">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-cormorant font-bold text-luxury-darkblue mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <CustomButton variant="outline" size="sm">
                  {language === 'en' ? 'Learn More' : 'আরও জানুন'}
                </CustomButton>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-platinum-100 py-16">
          <div className="container-custom">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-cormorant font-bold text-luxury-darkblue mb-4">
                {language === 'en' ? 'Need a Customized Service?' : 'কাস্টমাইজড সার্ভিস প্রয়োজন?'}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Contact our team for personalized real estate solutions tailored to your specific needs.' 
                  : 'আপনার নির্দিষ্ট চাহিদা অনুযায়ী ব্যক্তিগতকৃত রিয়েল এস্টেট সমাধানের জন্য আমাদের টিমের সাথে যোগাযোগ করুন।'}
              </p>
              <CustomButton variant="purple" size="lg">
                {language === 'en' ? 'Contact Us Today' : 'আজই যোগাযোগ করুন'}
              </CustomButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
