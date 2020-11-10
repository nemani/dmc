import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Paragraph } from 'grommet';
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

export const Token = ({ did, ...props }) => {
  const [tokenDetails, setTokenDetails] = useState({
    symbol: 'LOAD',
    name: 'loading',
    price: 0,
    description: 'Please wait while the description is being loaded !',
    priceOcean: 0,
    otherDetails: [{ color: 'white', dataKey: 'state', dataValue: 'loading' }],
  });

  const [hasError, setErrors] = useState(false);

  const handleData = (res) => {
    let { name, symbol, price, description, priceOcean, ...otherDetails } = res;

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
      symbol,
      price,
      description,
      priceOcean,
      otherDetails,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://data-marketcap-backend.herokuapp.com/datatoken/${did}`
      );
      res
        .json()
        .then((res) => handleData(res))
        .catch((err) => setErrors(err));
    };
    fetchData();
  }, [did]);

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
      {hasError && 'Has Error'}
      <Box gridArea="top" direction="row">
        <Box pad="medium" fill>
          <Text size="large"> Name: {tokenDetails.name}</Text>
        </Box>
        <Box pad="medium" fill>
          <Text size="large"> Symbol: {tokenDetails.symbol}</Text>
        </Box>
        <Box pad="medium" fill>
          <Text size="large">Price: {tokenDetails.price} USD</Text>
        </Box>
        <Box pad="medium" fill>
          <Text size="large"> Price: {tokenDetails.priceOcean} Ocean</Text>
        </Box>
      </Box>
      <Box gridArea="left" fill>
        <DataGraph symbol="bitcoin" />
        <Box pad="medium" fill>
          <Heading pad="small" margin="none" level="4">
            Description
          </Heading>
          <Paragraph fill>{tokenDetails.description}</Paragraph>
        </Box>
      </Box>
      <Box gridArea="right">
        {tokenDetails.otherDetails.map((property) => (
          <Box pad="small" border="small" key={property.dataKey} fill>
            <Heading margin="none" pad="small" level="4">
              {convertCase(property.dataKey)}
            </Heading>
            <Text size="medium">{property.dataValue}</Text>
          </Box>
        ))}
      </Box>
    </PageWrapper>
  );
};
