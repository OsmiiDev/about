'use client';

import {Container} from '@mantine/core';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import {Notifications} from '@mantine/notifications';
import {useRouter} from 'next/navigation';
import React from 'react';
import styles from './page.module.css';

/**
 * @description - Template page
 * @return {JSX.Element} - The page component
 */
export default function Page() {
  const _router = useRouter();

  return (
    <main className='m-0 flex h-screen w-full p-0'>
      <svg height='0' width='0'>
        <linearGradient id='pricing-tag-gradient' x1='100%' x2='0%' y1='100%' y2='0%'>
          <stop offset='0%' stopColor='rgb(var(--text-accent-primary))' />
          <stop offset='100%' stopColor='rgb(var(--text-accent-secondary))' />
        </linearGradient>
      </svg>

      <Notifications />
      <Sidebar selected={null} />
      <Container className='m-0 flex h-screen w-full flex-col p-0' maw='100%'>
        <Header />
        <div className='h-full w-full overflow-auto'>
          <div className='relative flex min-h-fit w-full flex-1 flex-col items-center justify-start overflow-auto p-2'>
            <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-full w-full p-0`}>
              <div className={`${styles.gridInner} absolute h-full w-full`}>
              </div>
            </div>


          </div>
        </div>
      </Container>
    </main>
  );
}
