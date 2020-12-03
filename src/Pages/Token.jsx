import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Anchor,
  Markdown,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  ResponsiveContext,
} from 'grommet';
import { DataGraph } from '../Components/DataGraph';
import Container from '../Components/Container';
import {
  amountFormatterTkn,
  amountFormatterUSD,
} from '../Components/DataTableColumns';
import * as Icons from 'grommet-icons';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TokenDetail = ({ icon, value, href }) => (
  <Box direction="row" gap="small" align="center">
    {icon}
    {href ? (
      <Anchor href={href} size="small" target="_blank">
        {value}
      </Anchor>
    ) : (
      <Text size="small" truncate>
        {value}
      </Text>
    )}
  </Box>
);

const TokenDescription = ({ tokenDetails }) => {
  return (
    <Box
      background="light-2"
      elevation="small"
      pad={{ vertical: 'small', horizontal: 'medium' }}
      gap="small"
      // border={{ color: 'light-3', size: 'small' }}
    >
      <Text size="large" weight="bold">
        {tokenDetails.datasetName}
      </Text>
      <Markdown
        components={{
          p: {
            props: { size: 'small' },
          },
        }}
      >
        {tokenDetails.description}
      </Markdown>
    </Box>
  );
};

const TokenDetails = ({ tokenDetails }) => {
  return (
    <>
      <Box
        direction="row"
        gap="xsmall"
        align="baseline"
        width={{ max: '500px', min: '500px' }}
      >
        <Text size="large" weight="bold">
          {tokenDetails.name}
        </Text>
        <Text color="dark-6" size="small" weight="bold">
          ({tokenDetails.symbol})
        </Text>
      </Box>

      <Box gap="xsmall">
        <TokenDetail
          icon={<Icons.User size="small" />}
          value={tokenDetails.author}
        />
        <TokenDetail
          icon={<Icons.Clock size="small" />}
          value={new Date(tokenDetails.createdAt).toLocaleString()}
        />
        <TokenDetail
          icon={<Icons.Host size="small" />}
          value={tokenDetails.datasetName}
        />
        <TokenDetail
          icon={<Icons.Map size="small" />}
          href={`https://etherscan.io/address/${tokenDetails.address}`}
          value={tokenDetails.address}
        />
      </Box>
    </>
  );
};
const TokenPrice = ({ tokenDetails }) => {
  return (
    <Box gap="medium" flex="grow">
      <Box direction="row" gap="medium" alignSelf="stretch">
        <Box direction="row" gap="xsmall" align="baseline">
          <Text size="large">
            {amountFormatterUSD.format(tokenDetails.price)}
          </Text>
          <Text color="dark-6" size="small">
            (USD)
          </Text>
        </Box>
        <Box direction="row" gap="xsmall" align="baseline">
          <Text size="large">
            {amountFormatterTkn(tokenDetails.priceOcean, '')}
          </Text>
          <Text color="dark-6" size="small">
            OCEAN
          </Text>
        </Box>
      </Box>
      <Box align="start" alignSelf="stretch">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="bottom">
                <Text size="small" color="dark-6" weight="bold">
                  Market Cap
                </Text>
              </TableCell>
              <TableCell scope="col" border="bottom">
                <Text size="small" color="dark-6" weight="bold">
                  OCEAN Liquidity
                </Text>
              </TableCell>
              <TableCell scope="col" border="bottom">
                <Text size="small" color="dark-6" weight="bold">
                  Fully Diluted Market Cap
                </Text>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                <Box gap="xsmall">
                  <Text weight="bold">
                    {amountFormatterUSD.format(tokenDetails.marketCap)}
                  </Text>
                  <Text size="small" color="dark-6">
                    {amountFormatterTkn(
                      tokenDetails.marketCap *
                        (tokenDetails.price / tokenDetails.priceOcean),
                      'OCEAN'
                    )}
                  </Text>
                </Box>
              </TableCell>
              <TableCell scope="row">
                <Box gap="xsmall">
                  <Text weight="bold">
                    {amountFormatterUSD.format(
                      tokenDetails.liquidityOcean * tokenDetails.priceOcean
                    )}
                  </Text>
                  <Text size="small" color="dark-6">
                    {amountFormatterTkn(tokenDetails.liquidityOcean, 'OCEAN')}
                  </Text>
                </Box>
              </TableCell>
              <TableCell scope="row">
                <Box gap="xsmall">
                  <Text weight="bold">
                    {amountFormatterUSD.format(
                      tokenDetails.fullyDilutedValuation
                    )}
                  </Text>
                  <Text size="small" color="dark-6">
                    {amountFormatterTkn(
                      tokenDetails.fullyDilutedValuation /
                        tokenDetails.priceOcean,
                      'OCEAN'
                    )}
                  </Text>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box align="start" alignSelf="stretch">
        <Box direction="row" gap="xsmall">
          <Text size="small" color="dark-6" weight="bold">
            Circlulating Supply:
          </Text>
          <Text weight="bold" size="small">
            {amountFormatterTkn(tokenDetails.circulatingSupply, '')}
          </Text>
        </Box>
        <Box direction="row" gap="small">
          <Text size="small" color="dark-6" weight="bold">
            Max Supply:
          </Text>
          <Text weight="bold" size="small">
            {amountFormatterTkn(tokenDetails.maxSupply, '')}
          </Text>
        </Box>
      </Box>
      <DataGraph
        symbol={tokenDetails.symbol}
        priceHistory={tokenDetails.priceHistory}
      />
    </Box>
  );
};

export const Token = ({ did, ...props }) => {
  const [tokenDetails, setTokenDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  const handleData = (res) => setTokenDetails(res);

  useEffect(() => {
    const DATATOKEN_ENDPOINT_URL = `https://data-marketcap-backend.herokuapp.com/datatoken/${did}`;
    // const DATATOKEN_ENDPOINT_URL = `http://127.0.0.1:5000/datatoken/${did}`;

    const fetchData = async () => {
      const res = await fetch(DATATOKEN_ENDPOINT_URL);
      res
        .json()
        .then((res) => handleData(res))
        .then(() => setIsLoading(false))
        .catch((err) => setErrors(err));
    };
    fetchData();
  }, [did]);

  return (
    <Container margin={{ vertical: 'large' }}>
      {isLoading ? (
        <Text size="small">Loading...</Text>
      ) : hasError ? (
        <Text size="small">Error</Text>
      ) : (
        <ResponsiveContext.Consumer>
          {(size) =>
            size !== 'small' ? (
              <Box direction="row" margin={{ vertical: 'small' }} gap="large">
                <Box gap="medium" width={{ max: '500px', min: '500px' }}>
                  <TokenDetails tokenDetails={tokenDetails} />
                  <TokenDescription tokenDetails={tokenDetails} />
                </Box>
                <TokenPrice tokenDetails={tokenDetails} />
              </Box>
            ) : (
              <Box gap="xlarge">
                <TokenDetails tokenDetails={tokenDetails} />
                <TokenPrice tokenDetails={tokenDetails} />
                <TokenDescription tokenDetails={tokenDetails} />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      )}
    </Container>
  );
};
