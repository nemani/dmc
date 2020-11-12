import { Box, Text } from 'grommet';
import { Tag } from './Tag';

export const amountFormatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const amountFormatterTkn = (prop, symbol) => {
  const formatter = new Intl.NumberFormat('en-US', {});
  return formatter.format(prop) + ' ' + symbol;
};

const wrapTextComponent = (child, rest) => (
  <Text size="small" {...rest}>
    {child}
  </Text>
);

export const dataTableColumns = [
  {
    property: 'symbol',
    header: wrapTextComponent('Name', { weight: 'bold', color: 'dark-6' }),
    primary: true,
    render: ({ name, symbol }) => (
      <Box gap="xxsmall">
        <Text size="small" weight="bold">
          {name}
        </Text>
        <Text size="xsmall" color="dark-6" weight={500}>
          {symbol}
        </Text>
      </Box>
    ),
  },
  {
    property: 'price',
    header: wrapTextComponent('Price', { weight: 'bold', color: 'dark-6' }),
    render: (datum) =>
      wrapTextComponent(amountFormatterUSD.format(datum.price)),
    align: 'end',
  },
  {
    property: 'marketCap',
    header: wrapTextComponent('Market Cap', {
      weight: 'bold',
      color: 'dark-6',
    }),
    render: (datum) =>
      wrapTextComponent(amountFormatterUSD.format(datum.marketCap)),
    align: 'end',
  },
  {
    property: 'volume',
    header: wrapTextComponent('Volume (Token)', {
      weight: 'bold',
      color: 'dark-6',
    }),
    align: 'end',
    render: ({ volume, price, symbol }) => (
      <Box gap="xxsmall">
        <Text size="small" weight="bold">
          {amountFormatterUSD.format(volume)}
        </Text>
        <Text size="xsmall" color="dark-6" weight={500}>
          {amountFormatterTkn(price !== 0 ? volume / price : 0, symbol)}
        </Text>
      </Box>
    ),
  },
  {
    property: 'circulatingSupply',
    header: wrapTextComponent('Circulating Supply', {
      weight: 'bold',
      color: 'dark-6',
    }),
    align: 'end',
    render: (datum) =>
      wrapTextComponent(Math.round(datum.circulatingSupply * 100) / 100),
  },
  {
    property: 'Tags',
    header: wrapTextComponent('Tags', {
      weight: 'bold',
      color: 'dark-6',
    }),
    align: 'end',
    render: (datum) => {
      const tags = datum.tags
        .slice(0, 2)
        .map((x) => <Tag key={x} children={x} />);
      const left = datum.tags.length - 2;
      if (left > 0) {
        tags.push(<Tag key={left} children={`and ${left} others`} />);
      }
      return tags;
    },
  },
];
