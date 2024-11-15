'use client';

import {HiDocumentText} from 'react-icons/hi';
import {Image, Text} from '@mantine/core';
import {
  SiCplusplus,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

import {Header} from '@/components/layout/Header';
import {HiOutlinePaperAirplane} from 'react-icons/hi2';
import styles from './page.module.css';
import {useEffect} from 'react';
import Link from 'next/link';
import {useLocalStorage} from '@/hooks/LocalStorage';

/**
 * @description - The home page (/).
 * @return {JSX.Element} - The home page.
 */
export default function Home() {
  const [theme, _] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header />

      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex justify-between p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} md:ml-8 lg:mr-12 lg:mt-16`}>
            <h1 className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              <span>Hey &#128075;. I&#39;m </span>
              <span className={`${styles.name}`}>Osmii</span>
              <span>,</span>
            </h1>

            <h3 className='mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:w-9/12 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              an aspiring <span className={`${styles.bolded}`}>full-stack developer</span> with
              interests in
              <span className={`${styles.bolded}`}> natural language processing</span> and
              <span className={`${styles.bolded}`}> cybersecurity</span>.
            </h3>

            <div className='mt-8 flex flex-row items-center md:mt-[3.25rem]'>
              <Link href='/contact'>
                <button className='mr-2 flex h-11 translate-y-0 items-center rounded-xl bg-accent-secondary px-3 transition-all hover:-translate-y-px hover:bg-accent-secondary-hover active:translate-y-px md:h-[3.25rem] md:px-5'>
                  <div className='mb-1 ml-1'>
                    <HiOutlinePaperAirplane className='-rotate-45 items-center text-[16px] text-invert-secondary md:text-lg' />
                  </div>
                  <Text className='m-1 ml-1.5 font-jakarta text-sm font-medium tracking-wide text-invert-secondary md:text-[16px]'>
                    Get in Touch
                  </Text>
                </button>
              </Link>

              <button className='flex items-center p-2 py-3.5 font-jakarta text-[14px] font-semibold text-primary opacity-70 transition-opacity hover:opacity-100 md:ml-6 md:p-0 md:text-[16px] md:font-bold'>
                <HiDocumentText className='mr-0.5 text-lg md:mr-1.5 md:text-xl' /> RESUME
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
                <div
                  className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`}
                />
                <SiVisualstudiocode className={`${styles.techIcon} hover:text-[#00a1f1]`} />
                <SiGit className={`${styles.techIcon} hover:text-[#f1502f]`} />
              </div>
            </div>
          </div>
          <div className='absolute right-0 -z-50 hidden lg:block'>
            <Image
              styles={{
                root: {
                  borderRadius: '50%',
                  height: '320px',
                  objectFit: 'cover',
                  width: '320px',
                },
              }}
              alt='Developer'
              className='mt-16 !h-120 !w-120 rounded-full object-cover xl:-mt-4 xl:!h-[42rem] xl:!w-[42rem]'
              src='/profile.webp'
              width='100%'
            />
          </div>
        </div>
      </main>
    </>
  );
}
