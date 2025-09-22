import { darkBackgroundColor } from '@constants';
import { Box } from '@mantine/core';

export const Line = ({ ...props }) => {
  const LineProps = {
    // ml: '-500px', // Убираем отступы
    w: '1000px', // Ширина полосы на всю ширину окна
    bg: darkBackgroundColor, // Цвет фона полосы
  };

  return <Box {...props} {...LineProps} />;
};
