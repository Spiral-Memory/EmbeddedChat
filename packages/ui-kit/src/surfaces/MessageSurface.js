import React from 'react';
import { Box } from 'ec-test-ui-elements';
import { Surface } from './Surface';

const MessageSurface = ({ children }) => (
  <Surface type="message">
    <Box style={{ marginBlock: '1rem' }}>{children}</Box>
  </Surface>
);

export default MessageSurface;
