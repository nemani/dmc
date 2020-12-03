import React, { useState, useEffect, createContext } from 'react';

import { useRoutes } from 'hookrouter';
import _ from 'lodash';
import { Box, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

import { Navbar } from './Components/Navbar';
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

export const TokenContext = createContext({});

const App = () => {
  const [allTokenList, setAllTokenList] = useState([]);
  const [stats, setStats] = useState({});
  const [dark, setDark] = useState(false);
  const match = useRoutes(routes);

  useEffect(() => {
    const DATATOKENS_ENDPOINT_URL = `https://data-marketcap-backend.herokuapp.com/datatokens`;
    // const DATATOKENS_ENDPOINT_URL = `http://127.0.0.1:5000/datatokens`;

    const fetchData = async () => {
      const res = await fetch(DATATOKENS_ENDPOINT_URL);
      res
        .json()
        .then((res) => {
          setAllTokenList(_(res[0]).orderBy('marketCap', 'desc').value());
          const {
            dataTokensLiquidity,
            dataTokensMarketCap,
            oceanMarketCap,
            oceanPrice,
            totalLiquidityOcean,
          } = res[1];

          setStats({
            totalTokens: res[0].length,
            oceanPrice,
            oceanMarketCap,
            dataTokensLiquidity,
            totalLiquidityOcean,
            totalMarketCap: dataTokensMarketCap,
            totalMarketCapInOcean: dataTokensMarketCap / oceanPrice,
          });
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <Grommet theme={grommet} cssVars full themeMode={dark ? 'dark' : 'light'}>
      {allTokenList.length > 0 ? (
        <TokenContext.Provider value={{ allTokenList, stats }}>
          <Navbar dark={dark} setDark={setDark} />
          <Box background="light-1">{match || <NotFound />}</Box>
        </TokenContext.Provider>
      ) : (
        <Box height="100vh" align="center" justify="center">
          <Text size="small">Loading...</Text>
        </Box>
      )}
    </Grommet>
  );
};

export default App;
