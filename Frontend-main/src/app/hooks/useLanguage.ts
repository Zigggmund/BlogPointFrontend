import { useContext, useEffect, useState } from 'react';
import { translations } from '@constants/translations';
import { useProfileChangeLanguage } from '@modules/profile/hooks/useChangeLanguage.ts';

import { ProfileContext } from '../context';

const LANGUAGE_KEY = 'language';

type Language = keyof typeof translations;

export const useLanguage = (defaultLang: Language = 'ru') => {
  const profileContext = useContext(ProfileContext);
  const profileChangeLanguage = useProfileChangeLanguage();

  const [localLang, setLocalLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem(LANGUAGE_KEY);
    return savedLang && savedLang in translations
      ? (savedLang as Language)
      : defaultLang;
  });

  const isAuthenticated = !!profileContext?.user;

  // Получаем язык из профиля, если пользователь авторизован
  const profileLanguage = profileContext?.user?.language;

  // Синхронизируем локальное состояние с языком из профиля при изменении
  useEffect(() => {
    if (isAuthenticated && profileLanguage && profileLanguage in translations) {
      setLocalLang(profileLanguage as Language);
      localStorage.setItem(LANGUAGE_KEY, profileLanguage);
    }
  }, [isAuthenticated, profileLanguage]);

  const language = isAuthenticated
    ? ((!(profileLanguage && profileLanguage in translations)
        ? defaultLang
        : profileLanguage) as Language)
    : localLang;

  const setLanguage = (lang: string) => {
    if (!(lang in translations)) return;

    if (!isAuthenticated) {
      localStorage.setItem(LANGUAGE_KEY, lang);
      setLocalLang(lang as Language);
    } else {
      profileChangeLanguage.mutate(lang);
    }
    window.location.reload();
  };

  const l = translations[language] || translations[defaultLang];

  return { language, setLanguage, l };
};
