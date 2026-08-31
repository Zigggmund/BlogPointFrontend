import { FC } from 'react';
import { Box } from '@mantine/core';
import { Heading4 } from '@ui/Heading/Heading4.tsx';

interface ILabelProps {
  title: string;
  text: string;
}

export const Label: FC<ILabelProps> = ({ title, text }) => {
  return (
    <Box w={'100%'}>
      <Heading4 mb="5px">{title}</Heading4>
      <div
        style={{
          border: 'solid 1px black',
          borderRadius: '15px',
          padding: '5px 15px 0 15px',
          background: 'white',
          height: '42px',
        }}
      >
        <Heading4 lineClamp={1}>{text}</Heading4>
      </div>
    </Box>
  );
};
