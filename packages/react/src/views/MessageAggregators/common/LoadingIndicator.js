import React from 'react';
import { Box, Throbber } from 'ec-test-ui-elements';
import useMessageAggregatorStyles from './MessageAggregator.styles';

const LoadingIndicator = () => {
  const styles = useMessageAggregatorStyles();
  return (
    <Box css={styles.centerColumnStyles}>
      <Throbber />
    </Box>
  );
};

export default LoadingIndicator;
