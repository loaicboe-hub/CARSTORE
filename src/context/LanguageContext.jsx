import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Read persisted language preference from localStorage or default to English
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('veloce_language');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update HTML document attributes for accessibility and styling
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', dir);
    try {
      localStorage.setItem('veloce_language', language);
    } catch {
      // Ignore storage errors if disabled
    }
  }, [language, dir]);

  const setLanguage = (newLang) => {
    if (newLang === 'ar' || newLang === 'en') {
      setLanguageState(newLang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  // Safe translation helper
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isArabic: language === 'ar',
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
