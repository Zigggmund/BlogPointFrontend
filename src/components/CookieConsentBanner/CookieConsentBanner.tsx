import { useContext } from 'react';
import { Button, Flex } from '@mantine/core';
import { Heading4 } from '@ui';

import { CookieContext } from '../../app/context';

export function CookieConsentBanner() {
  const { setConsent, showBanner } = useContext(CookieContext)!;

  if (!showBanner) return null;

  return (
    <div>
      <Flex gap="md" justify="center" align="center" direction="row">
        <Heading4>
          Мы используем cookie-файлы для улучшения вашего взаимодействия. Без
          них вы не сможете авторизоваться.
        </Heading4>
        <Button variant="default" onClick={() => setConsent('declined')}>
          Отклонить
        </Button>
        <Button onClick={() => setConsent('accepted')}>Принять</Button>
      </Flex>
    </div>
  );
}
