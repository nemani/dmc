import React from 'react';
import { Rewind } from 'grommet-icons';
import { A } from 'hookrouter';

import { Anchor, Box, Heading, Grid, WorldMap } from 'grommet';
import { PageWrapper } from '../Components/PageWrapper';

export const NotFound = () => (
  <PageWrapper
    rows={['full']}
    columns={['60%', '40%']}
    areas={[
      { name: 'left', start: [0, 0], end: [0, 0] },
      { name: 'right', start: [1, 0], end: [1, 0] },
    ]}
  >
    <WorldMap
      gridArea="left"
      color="neutral-2"
      onSelectPlace={(lat, lon) => {}}
      selectColor="accent-2"
      hoverColor="accent-4"
    />
    <Box gridArea="right" alignContent="start">
      <Heading level="1" margin="xsmall">
        Oops. Page Not Found.
      </Heading>
      <Heading level="2" margin={{ horizontal: 'none', vertical: 'large' }}>
        Lost?
      </Heading>
      <Anchor as={A} icon={<Rewind />} label="Back to Home Page" href="/" />
    </Box>
  </PageWrapper>
);
