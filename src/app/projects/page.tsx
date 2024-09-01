'use client';

import { HiOutlineInformationCircle } from 'react-icons/hi';

import { Header } from '@/components/layout/Header';
import { showNotification } from '@mantine/notifications';
import styles from './page.module.css';
import { useEffect } from 'react';

/**
 * @description - The home page (/).
 * @return {JSX.Element} - The home page.
 */
export default function Home() {
  useEffect(() => {
    showNotification({
      autoClose: 10_000,
      closeButtonProps: { 'aria-label': 'Close notification' },
      icon: <HiOutlineInformationCircle size={18} />,
      message: 'This website is still in development, and many links are not yet working.',
      styles: {
        closeButton: {
          ':hover': { backgroundColor: 'rgba(var(--background-secondary-color), 0.75)' },
          backgroundColor: 'transparent',
          color: 'rgb(var(--text-primary))',
          transition: '200ms',
        },
        description: {
          color: 'rgb(var(--text-primary))',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.875rem',
        },
        icon: {
          backgroundColor: 'rgb(var(--background-accent-primary)) !important',
          color: 'rgb(var(--text-primary))',
          height: '32px',
          width: '32px',
        },
        root: {
          backgroundColor: 'rgb(var(--background-primary))',
          border: '1px solid rgb(var(--border-secondary))',
          padding: '0.875rem !important',
        },
        title: {
          color: 'rgb(var(--text-primary))',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '1.0625rem',
        },
      },
      title: 'In Progress!',
    });

    // get theme
    const theme =
      localStorage.getItem('theme') || matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  });

  return (
    <>
      <Header />

      <main className='m-0 flex flex-col items-center justify-center p-0'>
        <div className='relative -z-10 flex h-[40rem] w-full items-start justify-center border-b border-b-secondary bg-secondary'>
          <div
            className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[32.5rem] w-full bg-secondary p-0`}>
            <div className='relative h-full w-full'>
              <div className={`${styles.gridInner} absolute h-full w-full`}></div>
            </div>
          </div>
          <div className={`${styles.slideFromLeft} px-4 pt-40 sm:px-8 md:w-270 md:px-16 lg:w-360`}>
            <h2 className='font-jakarta text-7xl font-semibold tracking-tight text-primary'>
              Projects
            </h2>
            <h3 className='mt-8 font-jakarta text-2xl font-normal tracking-normal text-secondary'>
              A showcase of my previous work.
            </h3>
          </div>
        </div>
        <div className='relative mb-20 flex w-full justify-center'>
          <div className='w-[35rem] pt-8'>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
          </div>
          <div className='relative mb-32 w-[37.5rem]'>
            <div className='absolute -top-10 ml-4 flex h-96 w-full overflow-hidden rounded-lg border border-secondary bg-secondary'>
              <div className='h-[4.5rem] w-full border-b border-b-secondary bg-primary'></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
