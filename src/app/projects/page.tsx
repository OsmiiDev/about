'use client';

import {Header} from '@/components/layout/Header';
import _styles from './page.module.css';
import {useEffect} from 'react';
import {HeadContainer} from '@/components/layout/HeadContainer';
import {useLocalStorage} from '@/hooks/LocalStorage';

export default function Projects() {
  const [theme, _] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Header />

      <main className='m-0 flex flex-col items-center justify-center p-0'>
        <HeadContainer>
          <h2 className='font-jakarta text-7xl font-semibold tracking-tight text-primary'>
            Projects
          </h2>
          <h3 className='mt-8 font-jakarta text-2xl font-normal tracking-normal text-secondary'>
            A showcase of my previous work.
          </h3>
        </HeadContainer>
        <div className='relative mb-20 flex w-full justify-center'>
          <div className='w-[35rem] pt-8'>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
            <div className='mr-8 mt-4 h-32 rounded-lg border border-secondary bg-secondary'></div>
          </div>
          <div className='relative mb-32 w-150'>
            <div className='absolute -top-10 ml-4 flex h-96 w-full overflow-hidden rounded-lg border border-secondary bg-secondary'>
              <div className='h-[4.5rem] w-full border-b border-b-secondary bg-primary'></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
