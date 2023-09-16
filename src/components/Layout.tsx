import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface LayoutProps {}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const theme = createTheme();

console.log('theme', theme);

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
