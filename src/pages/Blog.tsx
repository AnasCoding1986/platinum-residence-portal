
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CustomButton from "../components/ui/CustomButton";

const Blog = () => {
  const { language, translations } = useLanguage();
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: language === 'en' ? 'How to Find Your Dream Home in Sylhet' : 'সিলেটে আপনার স্বপ্নের বাড়ি কিভাবে খুঁজবেন',
      excerpt: language === 'en' 
        ? 'Discover the essential steps to find the perfect property in Sylhet that meets all your requirements and expectations.' 
        : 'সিলেটে আপনার সমস্ত প্রয়োজনীয়তা এবং প্রত্যাশা পূরণ করে এমন নিখুঁত সম্পত্তি খুঁজে পাওয়ার অপরিহার্য পদক্ষেপগুলি আবিষ্কার করুন।',
      date: language === 'en' ? 'June 15, 2023' : 'জুন ১৫, ২০২৩',
      author: language === 'en' ? 'Ahmed Khan' : 'আহমেদ খান',
      category: language === 'en' ? 'Home Buying' : 'বাড়ি কেনা',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: language === 'en' ? 'Investment Opportunities in Sylhet Real Estate' : 'সিলেট রিয়েল এস্টেটে বিনিয়োগের সুযোগ',
      excerpt: language === 'en' 
        ? 'Explore the lucrative investment opportunities in Sylhet\'s growing real estate market and how to maximize your returns.' 
        : 'সিলেটের বর্ধমান রিয়েল এস্টেট বাজারে লাভজনক বিনিয়োগের সুযোগ এবং আপনার রিটার্ন কীভাবে সর্বাধিক করবেন তা অন্বেষণ করুন।',
      date: language === 'en' ? 'May 28, 2023' : 'মে ২৮, ২০২৩',
      author: language === 'en' ? 'Fahmida Rahman' : 'ফাহমিদা রহমান',
      category: language === 'en' ? 'Investment' : 'বিনিয়োগ',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: language === 'en' ? 'Interior Design Trends for Luxury Homes' : 'বিলাসবহুল বাড়ির জন্য অভ্যন্তরীণ ডিজাইন ট্রেন্ড',
      excerpt: language === 'en' 
        ? 'Stay updated with the latest interior design trends that can transform your luxury property into a stunning masterpiece.' 
        : 'সর্বশেষ অভ্যন্তরীণ ডিজাইন ট্রেন্ডগুলির সাথে আপডেট থাকুন যা আপনার বিলাসবহুল সম্পত্তিকে একটি অবাক করা শিল্পকর্মে রূপান্তরিত করতে পারে।',
      date: language === 'en' ? 'April 12, 2023' : 'এপ্রিল ১২, ২০২৩',
      author: language === 'en' ? 'Nazmul Hasan' : 'নাজমুল হাসান',
      category: language === 'en' ? 'Interior Design' : 'অভ্যন্তরীণ নকশা',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: language === 'en' ? 'Guide to Property Taxes in Bangladesh' : 'বাংলাদেশে সম্পত্তি কর সম্পর্কিত গাইড',
      excerpt: language === 'en' 
        ? 'Understanding property taxes in Bangladesh - everything you need to know about rates, payments, and exemptions.' 
        : 'বাংলাদেশে সম্পত্তি কর বোঝা - হার, পেমেন্ট এবং ছাড় সম্পর্কে আপনার যা জানা দরকার।',
      date: language === 'en' ? 'March 5, 2023' : 'মার্চ ৫, ২০২৩',
      author: language === 'en' ? 'Tahmina Akter' : 'তাহমিনা আক্তার',
      category: language === 'en' ? 'Legal' : 'আইনি',
      image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: language === 'en' ? 'Sustainable Living in Modern Apartments' : 'আধুনিক অ্যাপার্টমেন্টে টেকসই জীবনযাপন',
      excerpt: language === 'en' 
        ? 'Explore eco-friendly features and sustainable living practices for modern apartment dwellers in urban Sylhet.' 
        : 'শহুরে সিলেটে আধুনিক অ্যাপার্টমেন্ট বাসিন্দাদের জন্য পরিবেশ-বান্ধব বৈশিষ্ট্য এবং টেকসই জীবনযাপন অনুশীলন অন্বেষণ করুন।',
      date: language === 'en' ? 'February 19, 2023' : 'ফেব্রুয়ারি ১৯, ২০২৩',
      author: language === 'en' ? 'Rezaul Karim' : 'রেজাউল করিম',
      category: language === 'en' ? 'Lifestyle' : 'জীবনযাপন',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: language === 'en' ? 'The Rise of Smart Homes in Bangladesh' : 'বাংলাদেশে স্মার্ট হোমের উত্থান',
      excerpt: language === 'en' 
        ? 'Discover how smart home technology is transforming residential properties in Bangladesh and what features to look for.' 
        : 'স্মার্ট হোম প্রযুক্তি কীভাবে বাংলাদেশে আবাসিক সম্পত্তি রূপান্তরিত করছে এবং কী বৈশিষ্ট্য খুঁজতে হবে তা আবিষ্কার করুন।',
      date: language === 'en' ? 'January 7, 2023' : 'জানুয়ারি ৭, ২০২৩',
      author: language === 'en' ? 'Sharmin Sultana' : 'শারমিন সুলতানা',
      category: language === 'en' ? 'Technology' : 'প্রযুক্তি',
      image: 'https://images.unsplash.com/photo-1558002038-2c2856ef3c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
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
                Latest <span className="text-gradient-gold">Insights</span> & News
              </h1>
              <p className="text-platinum-100 text-lg mb-8">
                {language === "en" 
                  ? "Stay updated with the latest trends, news and insights from the real estate market in Sylhet."
                  : "সিলেটের রিয়েল এস্টেট মার্কেটের সর্বশেষ ট্রেন্ড, নিউজ এবং ইনসাইটগুলি সম্পর্কে আপডেট থাকুন।"}
              </p>
              <div className="flex justify-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={language === "en" ? "Search articles..." : "প্রবন্ধ অনুসন্ধান করুন..."}
                    className="w-full md:w-80 pl-4 pr-10 py-3 bg-white/10 text-white placeholder:text-platinum-300 
                      rounded-lg border border-white/20 focus:border-luxury-blue focus:outline-none transition-all"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-platinum-300" size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  className="card-luxury flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-luxury-purple text-white text-xs font-medium py-1 px-3 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-grow p-6">
                    <div className="flex items-center text-sm text-platinum-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User2 size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="font-cormorant text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-platinum-600 text-sm mb-4">{post.excerpt}</p>
                    <CustomButton variant="gold" size="sm" className="mt-auto">
                      {language === "en" ? "Read More" : "আরও পড়ুন"}
                    </CustomButton>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-medium 
                    bg-white text-platinum-900 border border-platinum-200 hover:bg-platinum-50"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Prev
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium 
                    bg-luxury-purple text-white border border-luxury-purple"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium 
                    bg-white text-platinum-900 border border-platinum-200 hover:bg-platinum-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium 
                    bg-white text-platinum-900 border border-platinum-200 hover:bg-platinum-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-3 py-2 text-sm font-medium 
                    bg-white text-platinum-900 border border-platinum-200 hover:bg-platinum-50"
                >
                  Next
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-platinum-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                {language === "en" 
                  ? "Subscribe to Our Newsletter" 
                  : "আমাদের নিউজলেটার সাবস্ক্রাইব করুন"}
              </h2>
              <p className="text-platinum-600 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Get the latest real estate insights and news straight to your inbox. We'll never spam you."
                  : "সরাসরি আপনার ইনবক্সে সর্বশেষ রিয়েল এস্টেট ইনসাইট এবং নিউজ পান। আমরা আপনাকে কখনও স্প্যাম করব না।"}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={language === "en" ? "Your email address" : "আপনার ইমেইল ঠিকানা"}
                  className="flex-grow px-4 py-3 rounded-md sm:rounded-r-none border border-platinum-300 
                    focus:outline-none focus:ring-1 focus:ring-luxury-blue mb-3 sm:mb-0"
                />
                <CustomButton 
                  variant="gold" 
                  className="sm:rounded-l-none"
                >
                  {language === "en" ? "Subscribe" : "সাবস্ক্রাইব করুন"}
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

export default Blog;
