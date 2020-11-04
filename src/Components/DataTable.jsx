import React from 'react';
import { navigate } from 'hookrouter';

import { Box, DataTable } from 'grommet';
import { columns, DATA } from './data';

export const MyDataTable = (props) => {
  return (
    <Box align="center" pad={{ horizontal: 'none', vertical: 'small' }}>
      <DataTable
        columns={columns.map((c) => ({
          ...c,
          search: c.property === 'name' || c.property === 'symbol',
        }))}
        onClickRow={(e) => {
          navigate(`/dmc/token/${e.datum.name}`);
        }}
        data={DATA}
        pad={{
          body: 'medium',
        }}
        background={{
          header: {
            dark: 'neutral-1',
            light: 'neutral-3',
          },
          body: [
            { light: 'light-2', dark: 'dark-2' },
            { light: 'light-3', dark: 'dark-3' },
          ],
          footer: {
            dark: 'dark-3',
            light: 'light-3',
          },
        }}
        pin
        fill
        sortable
        resizeable
      />
    </Box>
  );
};
