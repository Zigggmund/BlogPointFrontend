import { createContext, useContext } from 'react';
import { translations } from '@constants/translations';

type Language = keyof typeof translations;
type Translations = (typeof translations)[Language];

export interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  l: Translations;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
