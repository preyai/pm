
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, ReactChild, useContext, useMemo, useState } from "react";
import { WrapperProps } from "../interfaces/wrapperProps";

type Mode = 'light' | 'dark'

interface ThemeContextInterface {
  toggleColorMode: () => void
}

const ThemeContext = createContext<ThemeContextInterface>({ toggleColorMode: () => { } })

const ThemeWrapper = ({ children }:WrapperProps) => {
  const localMode = (localStorage.getItem('themeMode') || 'light') as Mode;
  const [mode, setMode] = useState<Mode>(localMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = (prevMode:Mode) => (prevMode === 'light' ? 'dark' : 'light');
        localStorage.setItem('themeMode', newMode(mode))
        setMode(newMode);
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const Provider = ThemeContext.Provider

  return (
    <Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

function useThemeContext() {
  return useContext(ThemeContext)
}

export { ThemeContext, ThemeWrapper, useThemeContext }