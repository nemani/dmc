const amountFormatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const amountFormatterTkn = (prop, symbol) => {
  const formatter = new Intl.NumberFormat('en-US', {});
  return formatter.format(prop) + ' ' + symbol;
};

export const columns = [
  { property: '#', header: '#' },
  {
    property: 'name',
    header: 'Name',
    primary: true,
  },
  {
    property: 'symbol',
    header: 'Symbol',
  },
  {
    property: 'price',
    header: 'Price',
    render: (datum) => amountFormatterUSD.format(datum.price),
    align: 'end',
  },
  {
    property: 'marketCap',
    header: 'Market Cap',
    render: (datum) => amountFormatterUSD.format(datum.marketCap),
    align: 'end',
  },
  {
    property: 'volume_tkn',
    header: 'Volume (Token)',
    align: 'end',
    render: (datum) => amountFormatterUSD.format(datum.volume),
  },
  {
    property: 'circulatingSupply',
    header: 'Circulating Supply',
    align: 'end',
    render: (datum) => datum.circulatingSupply
  },
];
