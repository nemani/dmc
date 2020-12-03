import React, { useContext } from 'react';
import Chart from 'kaktana-react-lightweight-charts';
import { ThemeContext } from 'grommet';

export const DataGraph = ({ symbol, priceHistory, darkTheme }) => {
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

  const handleData = (priceHistory) =>
    priceHistory.map((c) => ({
      time: new Date(c[1] * 1000).toJSON(),
      value: c[0],
    }));

  const graphOptions = {
    lineColor: 'rgba(76, 175, 80, 1)',
    bottomColor: 'rgba(76, 175, 80, 0.04)',
    topColor: 'rgba(76, 175, 80, 0.56)',
    lineWidth: 3,
    title: `${symbol}/OCEAN`,
  };

  return (
    priceHistory?.length > 0 && (
      <Chart
        options={options}
        from={new Date(priceHistory[0][1] * 1000).toJSON()}
        to={new Date(priceHistory[priceHistory.length - 1][1] * 1000).toJSON()}
        areaSeries={[
          {
            data: handleData(priceHistory),
            options: graphOptions,
          },
        ]}
        autoWidth
        darkTheme={darkTheme}
      />
    )
  );
};

DataGraph.defaultProps = {
  priceHistory: [],
};
