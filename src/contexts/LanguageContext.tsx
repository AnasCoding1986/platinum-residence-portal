
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
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
  // Add more translations as needed
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
