import { createContext } from 'react';

export type ConsentStatus = 'accepted' | 'declined' | null;

interface CookieContextType {
  consent: ConsentStatus;
  setConsent: (status: ConsentStatus) => void;
  showBanner: boolean;
  forceShowBanner: () => void;
}

export const CookieContext = createContext<CookieContextType | null>(null);
