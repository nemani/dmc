import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter';

import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import { Navbar } from './Components/Navbar';
import { HomeOld } from './Pages/Home.old';
import Home from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Token } from './Pages/Token';

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
  const [tokenList, setTokenList] = useState([]);
  const [filteredTokenList, setFilteredTokenList] = useState([]);
  const [dark, setDark] = useState(false);
  const routes = {
    '/': () => <Home tokenList={tokenList} />,
    '/dmc': () => <Home tokenList={tokenList} />,
    '/dmc/': () => <Home tokenList={tokenList} />,
    '/dmc/old': () => <HomeOld tokenList={filteredTokenList} />,
    '/dmc/token/:did/': ({ did }) => <Token did={did} tokenList={tokenList} />,
    '/dmc/token/:did': ({ did }) => <Token did={did} tokenList={tokenList} />,
    '/token/:did/': ({ did }) => <Token did={did} tokenList={tokenList} />,
    '/token/:did': ({ did }) => <Token did={did} tokenList={tokenList} />,
  };
  const match = useRoutes(routes);

  const fetchData = async () => {
    const res = await fetch(
      `https://data-marketcap-backend.herokuapp.com/datatokens`
    );
    res
      .json()
      .then((res) => {
        setTokenList(res);
        setFilteredTokenList(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);

  return (
    <Grommet theme={myTheme} cssVars full themeMode={dark ? 'dark' : 'light'}>
      <Navbar
        tokenList={tokenList}
        setFilteredTokenList={setFilteredTokenList}
        dark={dark}
        setDark={setDark}
      />
      <Box tokenList={tokenList} background="light-1">
        {match || <NotFound />}
      </Box>
    </Grommet>
  );
};

export default App;
