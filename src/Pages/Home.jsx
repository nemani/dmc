import React from 'react';
import Container from '../Components/Container';
import { Box, Heading, Text } from 'grommet';
import * as Icons from 'grommet-icons'; // TODO: only import necessary icons

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
  return (
    <Container margin={{ vertical: 'medium' }}>
      <Heading level={3} margin={{ vertical: 'small' }}>
        Today's Token Prices by Market Cap
      </Heading>
      <Box direction="row" gap="xxsmall">
        <Text size="small">
          The global OCEAN market cap is <strong>$450.63B</strong>, a
        </Text>
        <PercentChange value={9.8} postfix="%" />
        <Text size="small">change over the last day.</Text>
      </Box>
    </Container>
  );
};

export default Home;
