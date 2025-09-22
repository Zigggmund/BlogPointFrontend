import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@constants';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { CookieContextProvider } from './app/context/CookieContextProvider.tsx';
import { LanguageProvider } from './app/context/LanguageContextProvider.tsx';
import { ProfileContextProvider } from './app/context/ProfileContextProvider.tsx';
import { App } from './App.tsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import '@mantine/core/styles.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <ProfileContextProvider>
            <CookieContextProvider>
              <LanguageProvider>
                <App />
              </LanguageProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </CookieContextProvider>
          </ProfileContextProvider>
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);

serviceWorkerRegistration.register();
