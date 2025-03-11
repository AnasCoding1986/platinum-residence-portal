
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  // Navigation
  navHome: {
    en: 'Home',
    bn: 'হোম',
  },
  navAbout: {
    en: 'About',
    bn: 'সম্পর্কে',
  },
  navProperties: {
    en: 'Properties',
    bn: 'প্রপার্টি',
  },
  navServices: {
    en: 'Services',
    bn: 'সেবা',
  },
  navBlog: {
    en: 'Blog',
    bn: 'ব্লগ',
  },
  navContact: {
    en: 'Contact',
    bn: 'যোগাযোগ',
  },
  
  // Footer
  footerQuickLinks: {
    en: 'Quick Links',
    bn: 'দ্রুত লিঙ্ক',
  },
  footerContactUs: {
    en: 'Contact Us',
    bn: 'যোগাযোগ করুন',
  },
  footerNewsletter: {
    en: 'Newsletter',
    bn: 'নিউজলেটার',
  },
  footerEmailPlaceholder: {
    en: 'Your email address',
    bn: 'আপনার ইমেইল ঠিকানা',
  },
  footerSubscribe: {
    en: 'Subscribe',
    bn: 'সাবস্ক্রাইব',
  },
  footerRights: {
    en: 'All rights reserved',
    bn: 'সর্বস্বত্ব সংরক্ষিত',
  },
  footerPrivacy: {
    en: 'Privacy Policy',
    bn: 'গোপনীয়তা নীতি',
  },
  footerTerms: {
    en: 'Terms of Service',
    bn: 'সেবার শর্তাবলী',
  },
  
  // Buttons
  buttonGetInTouch: {
    en: 'Get In Touch',
    bn: 'যোগাযোগ করুন',
  },
  buttonLearnMore: {
    en: 'Learn More',
    bn: 'আরও জানুন',
  },
  buttonViewAll: {
    en: 'View All',
    bn: 'সব দেখুন',
  },
  buttonSend: {
    en: 'Send Message',
    bn: 'বার্তা পাঠান',
  },
  
  // Services Page
  servicesTitle: {
    en: 'Our Services',
    bn: 'আমাদের সেবাসমূহ',
  },
  servicesDescription: {
    en: 'Discover our comprehensive range of real estate services designed to meet all your property needs in Sylhet.',
    bn: 'সিলেটে আপনার সমস্ত সম্পত্তি চাহিদা পূরণ করতে ডিজাইন করা আমাদের ব্যাপক রিয়েল এস্টেট পরিষেবাগুলি আবিষ্কার করুন।',
  },
  
  // Blog Page
  blogTitle: {
    en: 'Latest Updates',
    bn: 'সর্বশেষ আপডেট',
  },
  blogDescription: {
    en: 'Discover the latest trends, insights, and news about the real estate market in Sylhet.',
    bn: 'সিলেটে রিয়েল এস্টেট বাজারের সর্বশেষ প্রবণতা, অন্তর্দৃষ্টি এবং খবর আবিষ্কার করুন।',
  },
  blogReadMore: {
    en: 'Read More',
    bn: 'আরও পড়ুন',
  },
  
  // Contact Page
  contactTitle: {
    en: 'Contact Us',
    bn: 'যোগাযোগ করুন',
  },
  contactDescription: {
    en: 'We\'re here to help with all your real estate needs. Reach out to our team today.',
    bn: 'আমরা আপনার সমস্ত রিয়েল এস্টেট প্রয়োজনে সাহায্য করতে এখানে আছি। আজই আমাদের টিমের সাথে যোগাযোগ করুন।',
  },
  contactFormTitle: {
    en: 'Send Us a Message',
    bn: 'আমাদের একটি বার্তা পাঠান',
  },
  contactInfoTitle: {
    en: 'Contact Information',
    bn: 'যোগাযোগের তথ্য',
  },
  contactMapTitle: {
    en: 'Find Us on Map',
    bn: 'মানচিত্রে আমাদের খুঁজুন',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
