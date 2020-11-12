import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Heading,
  Paragraph,
  Anchor,
  Markdown,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
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

export const Token = ({ did, ...props }) => {
  const [tokenDetails, setTokenDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  const handleData = (res) => setTokenDetails(res);
  console.log('tokenDetails:', tokenDetails);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://data-marketcap-backend.herokuapp.com/datatoken/${did}`
      );
      res
        .json()
        .then((res) => handleData(res))
        .then(() => setIsLoading(false))
        .catch((err) => setErrors(err));
    })();
  }, [did]);

  return (
    <Container margin={{ vertical: 'large' }}>
      {isLoading ? (
        <Text size="small">Loading...</Text>
      ) : hasError ? (
        <Text size="small">Error</Text>
      ) : (
        <Box direction="row" margin={{ vertical: 'small' }} gap="large">
          <Box gap="medium" width={{ max: '500px', min: '500px' }}>
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

            <Box>
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

            <Box border={{ color: 'light-3', size: 'small', side: 'bottom' }} />

            <Box>
              <Text size="large" weight="bold">
                Description
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
          </Box>

          <Box gap="medium" flex="grow">
            <Box direction="row" gap="medium">
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

            <Box align="start">
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
                        Circulating Supply
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
                    <TableCell>
                      <Text>
                        {amountFormatterTkn(
                          tokenDetails.circulatingSupply,
                          tokenDetails.symbol
                        )}
                      </Text>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box>
              <DataGraph symbol="bitcoin" />
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};
