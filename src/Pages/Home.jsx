import React, { useContext } from 'react';
import Container from '../Components/Container';
import { Box, ResponsiveContext, Text } from 'grommet';
import * as Icons from 'grommet-icons'; // TODO: only import necessary icons
import { TokenContext } from '../App';
import { amountFormatterUSD } from '../Components/DataTableColumns';

import DataTable from '../Components/DataTable';

const PercentChange = ({ value, postfix }) => (
  <Box
    direction="row"
    gap="xxsmall"
    align="center"
    round="xsmall"
    background={{
      color: value < 0 ? 'status-critical' : 'status-ok',
      opacity: 'strong',
    }}
    pad={{ horizontal: 'xsmall' }}
    style={{
      display: 'inline-flex',
    }}
  >
    {value < 0 ? (
      <Icons.Down color="white" size="small" />
    ) : (
      <Icons.Up color="white" size="small" />
    )}
    <Text size="small" weight="bold" color="white">
      {Math.abs(value)}
      {postfix}
    </Text>
  </Box>
);

PercentChange.defaultProps = {
  postfix: '',
};

const Home = () => {
  const { stats } = useContext(TokenContext);

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Container margin={{ vertical: 'large' }}>
          <Text size="large" margin={{ vertical: 'small' }} weight="bold">
            Today's Token Prices by Market Cap
          </Text>
          <Box direction="row" gap="xxsmall">
            <Text size="small">
              The global OCEAN market cap is{' '}
              <strong>{amountFormatterUSD.format(stats.totalMarketCap)}</strong>
              , a <PercentChange value={9.8} postfix="%" /> change over the last
              day.
            </Text>
          </Box>
          <Box
            margin={{
              bottom: 'large',
              top: size !== 'small' ? 'medium' : 'xlarge',
            }}
          >
            <DataTable />
          </Box>
        </Container>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Home;
