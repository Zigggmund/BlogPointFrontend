import { createTheme } from '@mantine/core';

export const theme = createTheme({
  breakpoints: {
    xs: '450px', // 👈 твой кастомный брейкпоинт
    c500: '500px',
    sm: '576px',
    c620: '620px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
});
