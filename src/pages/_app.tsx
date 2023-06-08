import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

export const lightTheme = createTheme({ palette: { mode: 'light' } });

// export const darkTheme = createTheme({ palette: { mode: 'dark' } });

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
