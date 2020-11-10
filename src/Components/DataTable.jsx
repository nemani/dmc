import React, { useContext } from 'react';
import { navigate } from 'hookrouter';

import { Box, DataTable, Text, ThemeContext } from 'grommet';
import { DataTableColumns } from './DataTableColumns';

export const MyDataTable = ({ tokenList }) => {
  const theme = useContext(ThemeContext);

  return (
    <Box align="center" pad={{ horizontal: 'none', vertical: 'small' }}>
      <Text> Count filtered using Fuse JS: {tokenList.length}</Text>
      <DataTable
        columns={DataTableColumns}
        onClickRow={(e) => {
          navigate(`/dmc/token/${e.datum.did}`);
        }}
        data={tokenList}
        pad={{
          body: 'medium',
        }}
        background={{
          header: {
            dark: 'neutral-1',
            light: 'neutral-3',
          },
          body: theme.dark ? ['dark-2', 'dark-3'] : ['light-2', 'light-3'],
          footer: {
            dark: 'dark-3',
            light: 'light-3',
          },
        }}
        replace
        pin
        fill
        sortable
        resizeable
      />
    </Box>
  );
};
