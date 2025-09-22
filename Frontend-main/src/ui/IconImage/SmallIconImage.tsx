import { FC } from 'react';
import { Image } from '@mantine/core';
import { ImageProps, PolymorphicComponentProps } from '@mantine/core';

export const SmallIconImage: FC<
  PolymorphicComponentProps<'image', ImageProps>
> = ({ ...props }) => {
  const SmallIconImageProps = {
    h: '30px',
    w: '40px',
    style: {
      maxWidth: '50px',
    },
  };

  return <Image {...SmallIconImageProps} {...props} />;
};
