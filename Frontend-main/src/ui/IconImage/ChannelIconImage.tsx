import { FC } from 'react';
import { darkBackgroundColor, skyBlueColor } from '@constants';
import { Image } from '@mantine/core';
import { ImageProps, PolymorphicComponentProps } from '@mantine/core';

export const ChannelIconImage: FC<
  PolymorphicComponentProps<'image', ImageProps>
> = ({ ...props }) => {
  const SmallIconImageProps = {
    h: '50px',
    w: '50px',
    bd: `2px solid black`,
    radius: '50%',
    style: {
      minWidth: '50px',
      objectFit: 'cover', // Убирает искажения и заставляет картинку заполнять круг
    },
  };

  return <Image {...SmallIconImageProps} {...props} />;
};
