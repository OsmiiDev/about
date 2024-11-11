'use client';

import './globals.css';
import '@mantine/core/styles.layer.css';
import {MantineProvider} from '@mantine/core';
import {Metadata} from 'next';


export const metadata: Metadata = {title: 'Osmii • Fullstack and Machine Learning Developer'};


/**
 * @description - The root layout of the application
 * @param {React.ReactNode} children - The children
 * @return {JSX.Element} - The root layout
 */
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
