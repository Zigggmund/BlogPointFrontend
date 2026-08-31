import { FC, ReactNode } from 'react';
import { Flex } from '@mantine/core';

import '@mantine/carousel/styles.css';

interface IMainPageFrame {
  children?: ReactNode;
}
export const CommonFrame: FC<IMainPageFrame> = props => {
  return (
    <Flex
      // ml={{ sm: '50px', base: '0px' }} // в совсем узких окнах отступа нет
      m="0 auto"
      gap="25px"
      direction="column"
      wrap="wrap"
      align="center"
    >
      {props.children}
    </Flex>
  );
};
