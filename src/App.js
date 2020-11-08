import React, { useState } from 'react';

import { useRoutes } from 'hookrouter';

import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import { Navbar } from './Components/Navbar';
// import { HomeOld } from './Pages/Home.old';
import Home from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Token } from './Pages/Token';

const routes = {
  '/': () => <Home />,
  '/dmc': () => <Home />,
  '/dmc/': () => <Home />,
  '/dmc/token/:did/': ({ did }) => <Token did={did} />,
  '/dmc/token/:did': ({ did }) => <Token did={did} />,
  '/token/:did/': ({ did }) => <Token did={did} />,
  '/token/:did': ({ did }) => <Token did={did} />,
};

const myTheme = deepMerge(grommet, {
  // global: {
  //   focus: { border: { color: 'none' } },
  //   colors: {
  //     border: { light: '#601700', dark: '#F03A47' },
  //     focus: 'none',
  //     background: { light: 'white', dark: '#0D1321' },
  //     text: { light: 'black', dark: '#F03A47' },
  //   },
  // },
});

const App = () => {
  const match = useRoutes(routes);
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={myTheme} cssVars full themeMode={dark ? 'dark' : 'light'}>
      <Navbar dark={dark} setDark={setDark} />
      <Box background="light-1">{match || <NotFound />}</Box>
    </Grommet>
  );
};

export default App;
