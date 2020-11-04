import React, { useState, useEffect, useContext } from 'react';
import Chart from 'kaktana-react-lightweight-charts';
import { Button, defaultProps, ThemeContext } from 'grommet';

export const DataGraph = ({ symbol }) => {
  const graphOptions = {
    lineColor: 'white',
    bottomColor: 'goldenrod',
    topColor: 'red',
    lineWidth: 3,
    title: 'BTC/USD',
  };

  const options = {
    alignLabels: true,
    priceScale: {
      position: 'left',
      mode: 0,
      autoScale: true,
    },
    layout: {
      backgroundColor: '#FAEBD7',
      textColor: '#696969',
      fontSize: 12,
      fontFamily: 'Calibri',
    },
    grid: {
      vertLines: {
        color: 'rgba(70, 130, 180, 0.5)',
        style: 1,
        visible: true,
      },
      horzLines: {
        color: 'rgba(70, 130, 180, 0.5)',
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
  const theme = useContext(ThemeContext);

  const handleData = (res) =>
    res.prices.map((c) => ({ time: new Date(c[0]).toJSON(), value: c[1] }));

  const fetchData = async () => {
    // console.log('fetching new data');
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=360&interval=daily`
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

  useEffect(() => fetchData(), []);
  return (
    <Chart options={options} areaSeries={areaSeries} autoWidth darkTheme />
  );
};
