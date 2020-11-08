import React from 'react';

import { Anchor, Box, Heading, Grid } from 'grommet';
import { MyDataTable } from '../Components/DataTable';
import { PageWrapper } from '../Components/PageWrapper';

export const HomeOld = () => (
  <PageWrapper
    rows={['full']}
    columns={['15%', '70%', '15%']}
    areas={[{ name: 'middle', start: [1, 0], end: [1, 0] }]}
  >
    <Box gridArea="middle">
      <Heading level="3">Top Data Tokens Today: </Heading>
      <MyDataTable></MyDataTable>
    </Box>
  </PageWrapper>
);
