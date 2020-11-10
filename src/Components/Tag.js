import React from 'react';

import { Box, Button, Text } from 'grommet';

import { FormClose } from 'grommet-icons';

const renderTag = (children, onRemove) => (
  <Box
    background="brand"
    direction="column"
    align="center"
    round="xsmall"
    pad="xsmall"
    gap="xsmall"
    margin="xxsmall"
  >
    <Text size="small">{children}</Text>
    {onRemove && (
      <Box background={{ color: 'white', opacity: 'strong' }} round="full">
        <FormClose color="brand" style={{ width: '12px', height: '12px' }} />
      </Box>
    )}
  </Box>
);

export const Tag = ({ children, onRemove, ...rest }) =>
  onRemove ? (
    <Button onClick={onRemove}>{renderTag(children, onRemove)}</Button>
  ) : (
    renderTag(children, onRemove)
  );
