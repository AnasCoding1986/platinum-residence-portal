
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
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-luxury-darkblue to-luxury-blue py-16 text-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
              {language === 'en' ? 'Latest Updates' : 'সর্বশেষ আপডেট'}
            </h1>
            <p className="text-lg max-w-2xl">
              {language === 'en' 
                ? 'Discover the latest trends, insights, and news about the real estate market in Sylhet.' 
                : 'সিলেটে রিয়েল এস্টেট বাজারের সর্বশেষ প্রবণতা, অন্তর্দৃষ্টি এবং খবর আবিষ্কার করুন।'}
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-purple text-white text-xs font-medium py-1 px-2 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-cormorant font-bold text-luxury-darkblue mb-2 hover:text-luxury-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <CustomButton variant="link" size="sm">
                    {language === 'en' ? 'Read More' : 'আরও পড়ুন'} →
                  </CustomButton>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-platinum-200 text-gray-500 hover:border-luxury-purple hover:text-luxury-purple transition-colors">
                &laquo;
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-luxury-purple text-white">
                1
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-platinum-200 text-gray-500 hover:border-luxury-purple hover:text-luxury-purple transition-colors">
                2
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-platinum-200 text-gray-500 hover:border-luxury-purple hover:text-luxury-purple transition-colors">
                3
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-platinum-200 text-gray-500 hover:border-luxury-purple hover:text-luxury-purple transition-colors">
                &raquo;
              </a>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-platinum-100 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg text-center">
              <h2 className="text-3xl font-cormorant font-bold text-luxury-darkblue mb-4">
                {language === 'en' ? 'Subscribe to Our Newsletter' : 'আমাদের নিউজলেটার সাবস্ক্রাইব করুন'}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Stay updated with the latest real estate news, market trends, and exclusive property listings.' 
                  : 'সর্বশেষ রিয়েল এস্টেট নিউজ, মার্কেট ট্রেন্ড এবং এক্সক্লুসিভ প্রপার্টি লিস্টিং সম্পর্কে আপডেট থাকুন।'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={language === 'en' ? "Your email address" : "আপনার ইমেইল ঠিকানা"}
                  className="flex-grow px-4 py-3 rounded-md border border-platinum-300 focus:border-luxury-purple focus:outline-none"
                />
                <CustomButton variant="purple" size="md">
                  {language === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
