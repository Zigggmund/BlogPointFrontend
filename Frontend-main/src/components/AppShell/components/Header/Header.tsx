import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { greyColor, languages, skyBlueColor } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { useProfileLogout } from '@hooks/useProfileLogout.ts';
import { Button, Flex, Image, Select, Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

import { ProfileContext } from '../../../../app/context';

export const Header = () => {
  const btnProps = {
    h: 40,
    w: 150,
    radius: 'md',
    bd: 'solid black 1px',
  };
  const navigate = useNavigate();
  const profileLogout = useProfileLogout();
  const profileContext = useContext(ProfileContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { language, setLanguage, l } = useLanguage();

  useEffect(() => {
    if (profileContext?.user != null) {
      setIsAuthenticated(true);
    }
  }, [profileContext?.user]);

  return (
    <Flex justify={'space-between'} w="100%">
      {/* LOGO */}
      <Flex align="center" ml={15}>
        <Image
          display={{
            base: 'none',
            s500: isAuthenticated ? 'flex' : 'none',
            md: 'flex',
          }}
          radius="md"
          h={50}
          w="auto"
          src={'/icons/logo.png'}
        />
        <Text
          display={{
            base: 'none',
            s500: isAuthenticated ? 'flex' : 'none',
            md: 'flex',
          }}
          size="30px"
          w={180}
          fw={700}
        >
          BlogPoint
        </Text>
      </Flex>
      {/* Основные кнопки */}
      <Flex
        display={{ md: 'flex', base: isAuthenticated ? 'none' : 'flex' }}
        align="center"
        gap="md"
        justify="flex-end"
        w={'100%'}
        mr={15}
        mt={{ base: '5px', md: '0px' }}
      >
        <Button
          {...btnProps}
          bg={greyColor}
          onClick={() => {
            if (isAuthenticated) {
              profileLogout.mutate();
            } else {
              navigate('login');
            }
          }}
        >
          <Text size="lg" c="black">
            {isAuthenticated ? l.btnLogout : l.btnLogin}
          </Text>
        </Button>
        <Button
          {...btnProps}
          bg={skyBlueColor}
          display={{ base: 'none', c620: 'block' }}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isAuthenticated ? navigate('profile') : navigate('register');
          }}
        >
          <Text size="lg">
            {isAuthenticated ? l.btnProfile : l.btnRegister}
          </Text>
        </Button>
      </Flex>
      {/* Переключение языка + Logout для малых экранов */}
      <Flex>
        <Select
          mt={'8'}
          color={'red'}
          ml={'20'}
          mr={'10'}
          w={'80'}
          size="sm"
          radius="xl"
          styles={{
            input: {
              border: '3px solid #6BA4E8', // цвет и толщина границы
              borderRadius: '60px', // полностью круглая форма
              color: '#6BA4E8',
              fontSize: '22px',
              fontWeight: 'bold',
              minWidth: '80px',
            },
          }}
          value={language}
          onChange={value => setLanguage(value ?? 'ru')}
          data={Object.entries(languages).map(([value]) => ({
            value: value,
            label: value,
          }))}
        />
        {/* LOGout для мобильных устройств */}
        <Button
          mt={'10px'}
          variant="subtle"
          onClick={() => profileLogout.mutate()}
          display={{ md: 'none', base: isAuthenticated ? 'flex' : 'none' }}
        >
          <IconLogout color={skyBlueColor} size={'45px'} />
        </Button>
      </Flex>
    </Flex>
  );
};
