import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

const Container = ({ children, ...rest }) => {
  return (
    <Box {...rest}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'large' ? (
            <Box width="1200px" alignSelf="center">
              {children}
            </Box>
          ) : (
            <Box
              margin={{ horizontal: size !== 'small' ? 'xlarge' : 'medium' }}
            >
              {children}
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default Container;
