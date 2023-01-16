import React from 'react';
import { useState } from 'react';
import { colors } from './colors';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [isLightTheme, setLightTheme] = useState(false);
  const toggleTheme = () => {
    setLightTheme(previousState => !previousState);
  }
  console.log(colors);

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
    toggleTheme,
    isLightTheme,
   };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;