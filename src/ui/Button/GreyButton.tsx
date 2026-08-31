import { FC } from 'react';
import { greyColor } from '@constants';
import {
  Button as MantineButton,
  ButtonProps,
  PolymorphicComponentProps,
} from '@mantine/core';
import { Heading4 } from '@ui/Heading/Heading4.tsx';

export const GreyButton: FC<
  PolymorphicComponentProps<'button', ButtonProps>
> = ({ children, ...props }) => {
  const btnProps = {
    h: 40,
    style: {
      minWidth: '160px',
    },
    bg: greyColor,
    c: 'black',
    radius: 'md',
    bd: 'solid black 1px',
    mr: 15,
    mb: 15,
  };

  return (
    <MantineButton {...btnProps} {...props}>
      <Heading4 pb="0">{children}</Heading4>
    </MantineButton>
  );
};
