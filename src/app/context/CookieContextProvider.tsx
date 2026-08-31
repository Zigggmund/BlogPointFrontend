import { FC, ReactNode, useEffect, useState } from 'react';

import { ConsentStatus, CookieContext } from './CookieContext.tsx';

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieContextProvider: FC<CookieConsentProviderProps> = ({
  children,
}) => {
  const [consent, setConsentState] = useState<ConsentStatus>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent') as ConsentStatus;
    if (stored === 'accepted' || stored === 'declined') {
      setConsentState(stored);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const setConsent = (status: ConsentStatus) => {
    localStorage.setItem('cookie_consent', status ?? '');
    setConsentState(status);
    setShowBanner(false);
  };

  const forceShowBanner = () => setShowBanner(true);

  return (
    <CookieContext.Provider
      value={{ consent, setConsent, showBanner, forceShowBanner }}
    >
      {children}
    </CookieContext.Provider>
  );
};
