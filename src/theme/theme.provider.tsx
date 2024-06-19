import React, {useState} from 'react';
import {Colors} from './colors';
import {typography} from './typography';
import {LocalStorage} from '@modules/storage';

export interface ThemeSetting {
  isDarkTheme: boolean;
  colors: typeof Colors.light;
  typography: typeof typography;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext({
  isDarkTheme: false,
  colors: Colors.light,
  typography: typography,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    LocalStorage.getItem('isDarkTheme') === 'true' || true,
  );
  const theme: ThemeSetting = {
    isDarkTheme: isDarkTheme,
    colors: !isDarkTheme ? Colors.light : Colors.dark,
    typography: typography,
    toggleTheme: () => {
      LocalStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
      setIsDarkTheme(!isDarkTheme);
    },
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
