'use client';

import { HiDocumentText, HiOutlineInformationCircle } from 'react-icons/hi';
import { Image, Text, Title } from '@mantine/core';
import { SiCplusplus, SiGit, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si';

import { Header } from '@/components/layout/Header';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
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
    const theme = localStorage.getItem('theme') || matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  });

  return (
    <>
      <Header />

      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative h-full w-full'>
            <div className={`${styles.gridInner} absolute h-full w-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex justify-between p-0 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Title className='mt-10 font-jakarta text-[1.9rem] font-bold tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              <span>Hey &#128075;. I&#39;m </span>
              <span className={`${styles.name}`}>Osmii</span>
              <span>,</span>
            </Title>

            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Text className='mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:w-9/12 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              an aspiring <span className={`${styles.bolded}`}>full-stack developer</span> with interests in
              <span className={`${styles.bolded}`}> natural language processing</span> and
              <span className={`${styles.bolded}`}> cybersecurity</span>.
            </Text>

            <div className='mt-5 flex flex-row items-center md:mt-[3.25rem]'>
              {/* eslint-disable-next-line max-len */}
              <button className='flex h-12 translate-y-0 items-center rounded-xl bg-accent-secondary px-4 transition-all hover:bg-accent-secondary-hover active:translate-y-px md:h-[3.25rem] md:px-5'>
                <div className='mb-1 ml-1'>
                  <HiOutlinePaperAirplane className='-rotate-45 items-center text-[16px] text-invert-secondary md:text-lg' />
                </div>
                <Text className='m-1 ml-1.5 font-jakarta text-sm font-medium tracking-wide text-invert-secondary md:text-[16px]'> Get in Touch </Text>
              </button>

              <button className='flex items-center p-2 py-[0.875rem] font-jakarta text-[16px] font-bold text-primary opacity-70 transition-opacity hover:opacity-100 md:ml-6 md:p-0'>
                <HiDocumentText className='mr-0.5 text-xl md:mr-1.5 md:text-xl' /> RESUME
              </button>
            </div>

            <div className={`${styles.techIcons} mt-24 md:mt-36`}>
              <Text className='font-jakarta text-[13px] text-primary'> My favorite tools </Text>
              <div className='mt-3 flex flex-row items-center gap-3 text-2xl text-secondary md:gap-4 md:text-[27px]'>
                <SiReact className={`${styles.techIcon} hover:text-[#00d8ff]`} />
                <SiNextdotjs className={`${styles.techIcon} hover:text-[#aaaaaa]`} />
                <SiTailwindcss className={`${styles.techIcon} hover:text-[#3490dc]`} />
                <SiTypescript className={`${styles.techIcon} hover:text-[#3178c6]`} />
                <SiNodedotjs className={`${styles.techIcon} hover:text-[#6cc24a]`} />
                <SiCplusplus className={`${styles.techIcon} hover:text-[#0086d4]`} />
                <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
                <SiVisualstudiocode className={`${styles.techIcon} hover:text-[#00a1f1]`} />
                <SiGit className={`${styles.techIcon} hover:text-[#f1502f]`} />
              </div>
            </div>
          </div>
          <div className='absolute right-0 -z-50 hidden lg:block'>
            <Image
              styles={{
                image: {
                  borderRadius: '50%',
                  height: '320px',
                  objectFit: 'cover',
                  width: '320px',
                },
              }}
              alt='Developer'
              className='mt-16 !h-[30rem] !w-[30rem] rounded-full object-cover xl:-mt-4 xl:!h-[42rem] xl:!w-[42rem]'
              src='/profile.webp'
              width='100%'
            />
          </div>
        </div>
      </main>
    </>
  );
}
