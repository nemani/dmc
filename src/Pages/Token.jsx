import React, { useState, useEffect } from 'react';
// import { A } from 'hookrouter';

import { Box, Heading, Distribution, Text } from 'grommet';
import { DataGraph } from '../Components/DataGraph';
import { PageWrapper } from '../Components/PageWrapper';

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const convertCase = (str) => {
  str = str.replace(/([A-Z]+)/g, ' $1');
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Token = ({ symbol, ...props }) => {
  const [tokenDetails, setTokenDetails] = useState({
    symbol,
    props,
    otherDetails: [],
  });
  const [hasError, setErrors] = useState(false);

  const handleData = (res) => {
    let { name, price, description, priceOcean, ...otherDetails } = res;

    otherDetails = Object.entries(otherDetails).map(
      ([dataKey, dataValue], index, arr) => {
        return {
          color: getRandomColor(),
          dataKey,
          dataValue,
        };
      }
    );

    setTokenDetails({
      name,
      price,
      description,
      priceOcean,
      otherDetails,
    });
  };

  const fetchData = async () => {
    const res = await fetch('http://localhost:8080/test.json');
    res
      .json()
      .then((res) => handleData(res))
      .catch((err) => setErrors(err));
  };

  useEffect(() => fetchData(), []);

  return (
    <PageWrapper
      rows={['10%', '90%']}
      columns={['70%', '30%']}
      areas={[
        { name: 'top', start: [0, 0], end: [1, 0] },
        { name: 'left', start: [0, 1], end: [0, 1] },
        { name: 'right', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="top" direction="row">
        <Box pad="medium" background={getRandomColor()} fill>
          <Text size="large"> Name: {tokenDetails.name}</Text>
        </Box>
        <Box pad="medium" background={getRandomColor()} fill>
          <Text size="large"> Symbol: {symbol}</Text>
        </Box>
        <Box pad="medium" background={getRandomColor()} fill>
          <Text size="large">Price: {tokenDetails.price} USD</Text>
        </Box>
        <Box pad="medium" background={getRandomColor()} fill>
          <Text size="large"> Price: {tokenDetails.priceOcean} Ocean</Text>
        </Box>
      </Box>
      <Box gridArea="left" fill>
        <DataGraph symbol={symbol} />
        <Box pad="medium" background={getRandomColor()} fill>
          <Text size="large">Description</Text>
          <Text size="small">{tokenDetails.description}</Text>
        </Box>
      </Box>
      <Box gridArea="right">
        {tokenDetails.otherDetails.map((property) => (
          <Box
            pad="medium"
            background={property.color}
            key={property.dataKey}
            fill
          >
            <Text size="large">{convertCase(property.dataKey)}</Text>
            <Text size="medium">{property.dataValue}</Text>
          </Box>
        ))}
      </Box>
    </PageWrapper>
  );
};
