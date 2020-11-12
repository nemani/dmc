import React, { useState, useEffect, useContext } from 'react';
import Chart from 'kaktana-react-lightweight-charts';
import { ThemeContext } from 'grommet';

export const DataGraph = ({ symbol, darkTheme }) => {
  const theme = useContext(ThemeContext);

  const options = {
    alignLabels: true,
    priceScale: {
      position: 'left',
      mode: 0,
      autoScale: true,
    },
    layout: {
      backgroundColor: theme.global.colors['light-1'],
      textColor: theme.dark ? '#FBC2FF' : '#3E5C76',
      fontSize: 12,
      fontFamily: 'Calibri',
    },
    grid: {
      vertLines: {
        color: theme.global.colors.brand,
        style: 1,
        visible: true,
      },
      horzLines: {
        color: theme.global.colors.brand,
        style: 1,
        visible: true,
      },
    },
    localization: {
      // timeFormatter: (businessDayOrTimestamp) => {
      //   console.log(businessDayOrTimestamp);
      //   if (isBusinessDay(businessDayOrTimestamp)) {
      //     return businessDayOrTimestamp;
      //   }
      //   return 'Format for timestamp';
      // },
    },
    timeScale: {
      rightOffset: 8,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,

      //   timeVisible: true,
      //   secondsVisible: false,
    },
  };

  const [areaSeries, setAreaSeries] = useState();

  const handleData = (res) =>
    res.prices.map((c) => ({ time: new Date(c[0]).toJSON(), value: c[1] }));

  useEffect(() => {
    const fetchData = async () => {
      // console.log('fetching new data');

      const graphOptions = {
        lineColor: '#EF8275',
        bottomColor: '#54414E',
        topColor: '#F68D94',
        lineWidth: 3,
        title: `${symbol}/USD`,
      };

      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${symbol.toLowerCase()}/market_chart?vs_currency=usd&days=360&interval=daily`
      );
      res
        .json()
        .then((res) =>
          setAreaSeries([
            {
              data: handleData(res),
              options: graphOptions,
            },
          ])
        )
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [symbol]);

  return (
    <Chart
      options={options}
      areaSeries={areaSeries}
      autoWidth
      darkTheme={darkTheme}
    />
  );
};
