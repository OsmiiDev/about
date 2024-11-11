'use client';

import {MantineProvider} from '@mantine/core';

export const ProviderWrapper: React.FC<{
  children: React.ReactNode;
}> = ({children}): JSX.Element => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
};
