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
    property: 'market_cap',
    header: 'Market Cap',
    render: (datum) => amountFormatterUSD.format(datum.market_cap),
    align: 'end',
  },
  {
    property: 'volume_tkn',
    header: 'Volume (Token)',
    align: 'end',
    render: (datum) => amountFormatterTkn(datum.volume_tkn, datum.symbol),
  },
  {
    property: 'supply',
    header: 'Circulating Supply',
    align: 'end',
    render: (datum) => amountFormatterTkn(datum.supply, datum.symbol),
  },
];

export const DATA = [
  {
    '#': 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 12988.7,
    market_cap: 240588780100,
    volume: 35160306261,
    volume_tkn: 2706993,
    supply: 18522937,
  },
  {
    '#': 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 414.7,
    market_cap: 46900712085,
    volume: 17536640518,
    volume_tkn: 42287289,
    supply: 113094863,
  },
  {
    '#': 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    market_cap: 15915671167,
    volume: 53167090652,
    volume_tkn: 53105346094,
    supply: 15897187815,
  },
  {
    '#': 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 0.258227,
    market_cap: 11684254010,
    volume: 2757357405,
    volume_tkn: 10678052443,
    supply: 45248061374,
  },
  {
    '#': 5,
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    price: 268.53,
    market_cap: 4981670432,
    volume: 3143494100,
    volume_tkn: 11706476,
    supply: 18551906,
  },
  {
    '#': 6,
    name: 'Chainlink',
    symbol: 'LINK',
    price: 12.17,
    market_cap: 4727101353,
    volume: 1653108056,
    volume_tkn: 135865138,
    supply: 388509556,
  },
  {
    '#': 7,
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 30.87,
    market_cap: 4458028484,
    volume: 533529866,
    volume_tkn: 17282351,
    supply: 144406561,
  },
];
