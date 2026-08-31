import { ReactNode, useMemo, useState } from 'react';
import { translations } from '@constants/translations';

import { LanguageContext } from './LanguageContext';

const LANGUAGE_KEY = 'language';
const defaultLang = 'ru' as const;

type Language = keyof typeof translations;

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem(LANGUAGE_KEY) as Language) || defaultLang,
  );

  const value = useMemo(() => {
    const l = translations[language] || translations[defaultLang];
    return {
      language,
      setLanguage: (lang: Language) => {
        localStorage.setItem(LANGUAGE_KEY, lang);
        setLanguage(lang);
      },
      l,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
