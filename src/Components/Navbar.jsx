import React, { useContext } from 'react';
import { Box, Text } from 'grommet';
import { navigate } from 'hookrouter';
import Container from './Container';
import { TokenContext } from '../App';
import { amountFormatterTkn, amountFormatterUSD } from './DataTableColumns';

const Logo = () => (
  <Box onClick={() => navigate(`/dmc`)}>
    <Text size="large" weight={500}>
      Data Market Cap
    </Text>
  </Box>
);

const PoweredBy = () => (
  <Box direction="row" gap="small" align="center">
    <Text size="xsmall">powered by</Text>
    <svg
      width="36"
      height="36"
      viewBox="0 0 512 512"
      className="Logo-module--logo--fjl9p undefined"
    >
      <path
        d="M133.619 477.44v-.264c0-16.034-12.033-28.807-27.468-28.807-15.83 0-27.218 12.908-27.218 28.557v.25c0 16.044 12.039 28.817 27.469 28.817 15.835 0 27.217-12.903 27.217-28.552m-61.619 0v-.265c0-18.636 14.523-34.8 34.402-34.8 19.767 0 34.15 15.905 34.15 34.55v.25c0 18.646-14.523 34.824-34.401 34.824C86.393 512 72 496.086 72 477.44m83.548 0v-.264c0-18.636 14.874-34.8 33.92-34.8 12.52 0 20.35 5.728 26.615 12.255l-4.567 4.679c-5.74-5.853-12.27-10.941-22.183-10.941-15.129 0-26.87 12.643-26.87 28.557v.25c0 16.044 12.13 28.817 27.395 28.817 9.388 0 16.692-4.814 22.308-11.08l4.437 3.914c-6.785 7.686-14.88 13.173-27.135 13.173-19.18 0-33.92-15.914-33.92-34.56m128.046-3.39c-.915-13.422-8.611-25.816-23.88-25.816-13.188 0-23.358 11.08-24.537 25.816h48.417zm-55.21 3.27v-.274c0-19.294 13.584-34.67 31.586-34.67 18.666 0 30.54 15.12 30.54 34.8 0 1.179 0 1.573-.13 2.612h-55.203c1.179 16.563 13.044 26.21 26.107 26.21 10.296 0 17.352-4.56 22.825-10.426l4.438 3.914c-6.787 7.3-14.739 12.514-27.528 12.514-17.487 0-32.634-13.956-32.634-34.68zm126.634 8.016v-7.632c-5.649-1.439-13.135-3.009-22.731-3.009-14.202 0-22.091 6.3-22.091 15.627v.261c0 9.72 9.198 15.37 19.463 15.37 13.669 0 25.359-8.402 25.359-20.617m-51.654 5.635v-.257c0-13.93 11.957-21.809 29.32-21.809 9.325 0 15.769 1.187 22.213 2.902v-2.902c0-13.538-8.292-20.491-22.086-20.491-8.16 0-14.857 2.238-21.034 5.393l-2.371-5.66c7.365-3.406 14.6-5.77 23.802-5.77 9.063 0 16.292 2.49 21.16 7.355 4.47 4.467 6.837 10.64 6.837 18.916v41.772h-6.308v-11.168C350.295 505.686 342.009 512 329.26 512c-12.49 0-25.897-7.094-25.897-21.029m80.335-47.025h6.377v12.475c4.403-7.887 11.81-14.044 23.893-14.044 16.75 0 26.5 11.554 26.5 27.58v40.972h-6.363v-39.79c0-13.792-7.666-22.862-21.043-22.862-12.993 0-22.987 9.99-22.987 23.904v38.748h-6.377v-66.983zM119.129 179.41c0 10.944-8.864 19.821-19.815 19.821-10.942 0-19.816-8.877-19.816-19.82 0-10.944 8.874-19.812 19.816-19.812 10.95 0 19.816 8.868 19.816 19.811m314.912 0c0 10.944-8.875 19.821-19.811 19.821-10.946 0-19.821-8.877-19.821-19.82 0-10.944 8.875-19.812 19.82-19.812 10.937 0 19.812 8.868 19.812 19.811m-157.456 78.195c0 10.942-8.874 19.819-19.814 19.819-10.945 0-19.818-8.877-19.818-19.819 0-10.942 8.873-19.813 19.818-19.813 10.94 0 19.814 8.871 19.814 19.813m-79.264-38.558c0 10.939-8.869 19.816-19.818 19.816-10.945 0-19.814-8.877-19.814-19.816 0-10.948 8.87-19.816 19.814-19.816 10.95 0 19.818 8.868 19.818 19.816m157.456 0c0 10.939-8.873 19.816-19.813 19.816-10.95 0-19.819-8.877-19.819-19.816 0-10.948 8.87-19.816 19.819-19.816 10.94 0 19.813 8.868 19.813 19.816m-242.075 20.356c0 7.382-5.99 13.385-13.382 13.385-7.402 0-13.396-6.003-13.396-13.385 0-7.4 5.994-13.394 13.396-13.394 7.393 0 13.382 5.993 13.382 13.394m314.912 0c0 7.382-5.998 13.385-13.39 13.385-7.395 0-13.388-6.003-13.388-13.385 0-7.4 5.993-13.394 13.389-13.394 7.391 0 13.39 5.993 13.39 13.394m-157.457 79.25c0 7.396-6 13.398-13.384 13.398-7.389 0-13.394-6.002-13.394-13.399 0-7.39 6.005-13.379 13.394-13.379 7.383 0 13.384 5.988 13.384 13.38m-79.264-39.618c0 7.394-5.993 13.384-13.384 13.384-7.396 0-13.394-5.99-13.394-13.384 0-7.399 5.998-13.394 13.394-13.394 7.391 0 13.384 5.995 13.384 13.394m157.456 0c0 7.394-6.001 13.384-13.381 13.384-7.4 0-13.397-5.99-13.397-13.384 0-7.399 5.997-13.394 13.397-13.394 7.38 0 13.381 5.995 13.381 13.394m-242.075 7.486a6.962 6.962 0 11-13.925 0 6.957 6.957 0 016.965-6.955 6.956 6.956 0 016.96 6.955m314.912 0a6.962 6.962 0 11-13.925 0 6.955 6.955 0 016.965-6.955c3.838 0 6.96 3.112 6.96 6.955m-157.456 79.266c0 3.846-3.122 6.967-6.96 6.967a6.967 6.967 0 01-6.964-6.967 6.958 6.958 0 016.964-6.958 6.96 6.96 0 016.96 6.958m-79.263-39.627a6.967 6.967 0 01-6.965 6.962 6.966 6.966 0 01-6.96-6.962 6.96 6.96 0 016.96-6.962 6.961 6.961 0 016.965 6.962m157.456 0c0 3.841-3.123 6.962-6.96 6.962A6.96 6.96 0 01328 326.16a6.953 6.953 0 016.965-6.962 6.961 6.961 0 016.96 6.962m-58.912-299.38c0 14.792-11.991 26.777-26.771 26.777-14.795 0-26.786-11.985-26.786-26.777C229.456 11.99 241.447 0 256.242 0c14.78 0 26.77 11.99 26.77 26.779m0 79.263c0 14.79-11.99 26.778-26.77 26.778-14.795 0-26.786-11.988-26.786-26.778 0-14.786 11.991-26.778 26.786-26.778 14.78 0 26.77 11.992 26.77 26.778m0 78.197c0 14.784-11.99 26.774-26.77 26.774-14.795 0-26.786-11.99-26.786-26.774 0-14.793 11.991-26.783 26.786-26.783 14.78 0 26.77 11.99 26.77 26.783m157.457-78.197c0 14.79-11.99 26.778-26.776 26.778-14.792 0-26.78-11.988-26.78-26.778 0-14.786 11.988-26.778 26.78-26.778 14.787 0 26.776 11.992 26.776 26.778m-314.913 0c0 14.79-11.986 26.778-26.775 26.778C83.99 132.82 72 120.832 72 106.042c0-14.786 11.991-26.778 26.78-26.778 14.79 0 26.776 11.992 26.776 26.778M204.82 66.41c0 14.788-11.987 26.778-26.778 26.778-14.791 0-26.778-11.99-26.778-26.778 0-14.798 11.987-26.778 26.778-26.778 14.79 0 26.778 11.98 26.778 26.778m0 78.19c0 14.79-11.987 26.78-26.778 26.78-14.791 0-26.778-11.99-26.778-26.78 0-14.785 11.987-26.776 26.778-26.776 14.79 0 26.778 11.991 26.778 26.776m157.456-78.19c0 14.788-11.99 26.778-26.78 26.778-14.79 0-26.776-11.99-26.776-26.778 0-14.798 11.986-26.778 26.776-26.778s26.78 11.98 26.78 26.778m0 78.19c0 14.79-11.99 26.78-26.78 26.78-14.79 0-26.776-11.99-26.776-26.78 0-14.785 11.986-26.776 26.776-26.776s26.78 11.991 26.78 26.776"
        fill="#141414"
        fillRule="evenodd"
      />
    </svg>
  </Box>
);

const Stat = ({ name, value }) => (
  <Box direction="row" gap="xxsmall">
    <Text size="xsmall">{name}:</Text>
    <Text size="xsmall" color="brand" weight={500}>
      {value}
    </Text>
  </Box>
);

export const Navbar = ({ dark, setDark }) => {
  const { stats: _stats } = useContext(TokenContext);
  const stats = [
    { name: 'Tokens', value: _stats.totalTokens },
    {
      name: 'OCEAN Price',
      value: amountFormatterUSD.format(_stats.oceanPrice),
    },
    {
      name: 'OCEAN Market Cap',
      value: amountFormatterUSD.format(_stats.oceanMarketCap),
    },
    {
      name: 'Tokens Volume (24h)',
      value: `${amountFormatterUSD.format(
        _stats.dataTokensVolumeInOcean
      )} (${amountFormatterTkn(_stats.dataTokensVolumeInOcean, 'OCEAN')})`,
    },
    {
      name: 'Tokens Market Cap',
      value: `${amountFormatterUSD.format(
        _stats.totalMarketCap
      )} (${amountFormatterTkn(_stats.totalMarketCapInOcean, 'OCEAN')})`,
    },
  ];

  return (
    <>
      <Box
        tag="header"
        pad={{ vertical: 'xsmall' }}
        border={{ side: 'bottom', size: 'xsmall', color: 'light-3' }}
      >
        <Container>
          <Box direction="row" align="center">
            <Box direction="row" gap="small">
              {stats.map((stat) => (
                <Stat key={stat.name} name={stat.name} value={stat.value} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        tag="header"
        pad={{ vertical: 'small' }}
        border={{ side: 'bottom', size: 'xsmall', color: 'light-3' }}
      >
        <Container>
          <Box direction="row" align="center" justify="between">
            <Logo />
            <PoweredBy />
          </Box>
        </Container>
      </Box>
    </>
  );
};
