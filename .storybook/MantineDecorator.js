import React from 'react';
import { MantineProvider } from '@mantine/core';

export const ThemeDecorator = (getStory) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: 'dark' }}
  >{getStory()}
  </MantineProvider>
);