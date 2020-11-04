import React from 'react';
import { Anchor, Button, Box, Clock, Text } from 'grommet';
import { A } from 'hookrouter';

import { Solaris, Moon } from 'grommet-icons';

export const Navbar = ({ dark, setDark }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
  >
    <Anchor as={A} label=" Data Market Cap " href="/dmc" />
    <Clock type="digital" />
    <Button
      onClick={() => {
        setDark(!dark);
      }}
      icon={dark ? <Solaris /> : <Moon />}
    ></Button>
  </Box>
);
