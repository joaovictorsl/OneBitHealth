import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext';
import { Home } from './src/screen/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
