import React, { useState } from 'react';

import { useRoutes } from 'hookrouter';

import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { Token } from './Pages/Token';

const routes = {
  '/': () => <Home />,
  '/about': () => <NotFound />,
  '/token/:symbol': ({ symbol }) => <Token symbol={symbol} />,
};

const App = () => {
  const match = useRoutes(routes);
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={grommet} cssVars full themeMode={dark ? 'dark' : 'light'}>
      <Navbar dark={dark} setDark={setDark} />
      {match || <NotFound />}
    </Grommet>
  );
};

export default App;
