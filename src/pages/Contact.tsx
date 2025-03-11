
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import CustomButton from "../components/ui/CustomButton";

const Contact = () => {
  const { language, translations } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-luxury-darkblue to-luxury-blue py-16 text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              {language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
            </h1>
            <p className="text-lg max-w-2xl">
              {language === 'en' 
                ? 'We\'re here to help with all your real estate needs. Reach out to our team today.' 
                : 'আমরা আপনার সমস্ত রিয়েল এস্টেট প্রয়োজনে সাহায্য করতে এখানে আছি। আজই আমাদের টিমের সাথে যোগাযোগ করুন।'}
            </p>
          </div>
        </div>

        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-platinum-200">
              <h2 className="text-2xl font-cormorant font-bold text-luxury-darkblue mb-6">
                {language === 'en' ? 'Send Us a Message' : 'আমাদের একটি বার্তা পাঠান'}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Your Name' : 'আপনার নাম'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2.5 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                      placeholder={language === 'en' ? "John Doe" : "জন ডো"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Email Address' : 'ইমেইল ঠিকানা'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2.5 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                      placeholder={language === 'en' ? "john@example.com" : "john@example.com"}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Phone Number' : 'ফোন নম্বর'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                    placeholder={language === 'en' ? "+880 1XX XXX XXXX" : "+৮৮০ ১XX XXX XXXX"}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Subject' : 'বিষয়'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                    placeholder={language === 'en' ? "Property Inquiry" : "প্রপার্টি সম্পর্কে জিজ্ঞাসা"}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'en' ? 'Your Message' : 'আপনার বার্তা'}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                    placeholder={language === 'en' ? "I'm interested in..." : "আমি আগ্রহী..."}
                  ></textarea>
                </div>
                <div>
                  <CustomButton variant="purple" size="lg" type="submit" icon={<Send size={16} />}>
                    {language === 'en' ? 'Send Message' : 'বার্তা পাঠান'}
                  </CustomButton>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-platinum-200">
                <h2 className="text-2xl font-cormorant font-bold text-luxury-darkblue mb-6">
                  {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-5 h-5 text-luxury-purple mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        {language === 'en' ? 'Our Office' : 'আমাদের অফিস'}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        123 Zindabazar Road, Sylhet 3100, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="w-5 h-5 text-luxury-purple mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        {language === 'en' ? 'Phone' : 'ফোন'}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href="tel:+8801712345678" className="hover:text-luxury-purple transition-colors">
                          +880 1712 345678
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href="tel:+8801712345679" className="hover:text-luxury-purple transition-colors">
                          +880 1712 345679
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-5 h-5 text-luxury-purple mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        {language === 'en' ? 'Email' : 'ইমেইল'}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href="mailto:info@platinumresidence.com" className="hover:text-luxury-purple transition-colors">
                          info@platinumresidence.com
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        <a href="mailto:support@platinumresidence.com" className="hover:text-luxury-purple transition-colors">
                          support@platinumresidence.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="w-5 h-5 text-luxury-purple mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        {language === 'en' ? 'Working Hours' : 'কাজের সময়'}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {language === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM' : 'সোমবার - শুক্রবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০'}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {language === 'en' ? 'Saturday: 10:00 AM - 4:00 PM' : 'শনিবার: সকাল ১০:০০ - বিকাল ৪:০০'}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {language === 'en' ? 'Sunday: Closed' : 'রবিবার: বন্ধ'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-platinum-200">
                <h3 className="text-xl font-cormorant font-bold text-luxury-darkblue mb-4">
                  {language === 'en' ? 'Find Us on Map' : 'মানচিত্রে আমাদের খুঁজুন'}
                </h3>
                <div className="rounded-lg overflow-hidden h-72 bg-platinum-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107261921!2d91.82855548036282!3d24.899837246896484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1654872945456!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
