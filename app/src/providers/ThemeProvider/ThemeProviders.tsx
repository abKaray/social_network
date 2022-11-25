import { createContext, FC, ReactElement } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MiuThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

// import { useLocalStorage } from '../../hooks/useLocalStorage';
// import { axiosApiInstance } from '../../api/apiRequest';
// import { BACKEND_TOKEN } from '../../constants/localStorage';

export const ThemeContext = createContext({});

interface Props {
  children: ReactElement;
}

const cacheRtl = createCache({
  key: 'css',
  stylisPlugins: [
    // TODO: Enable/disable based on document dir
    // rtlPlugin as StylisPlugin
  ],
});

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <MiuThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MiuThemeProvider>
    </CacheProvider>
  );
};
