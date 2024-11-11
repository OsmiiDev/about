'use client';

import {SiDocker, SiGit, SiNextdotjs} from 'react-icons/si';

import {TbCode} from 'react-icons/tb';

import {Header} from '@/components/layout/Header';
import _styles from './page.module.css';
import {useEffect, useState} from 'react';
import {HeadContainer} from '@/components/layout/HeadContainer';
import {useLocalStorage} from '@/hooks/LocalStorage';

export default function Skills() {
  const [theme, _] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [selectedSkillTab, setSelectedSkillTab] = useState('web-development');

  return (
    <>
      <Header />

      <main className='m-0 flex flex-col items-center justify-center p-0'>
        <HeadContainer>
          <h4 className='mb-1 ml-2 font-geist text-xl font-medium tracking-normal text-accent-primary'>
            Work
          </h4>
          <h2 className='font-geist text-7xl font-medium tracking-normal text-primary'>Skills</h2>
          <h3 className='mt-8 w-full shrink-0 font-geist text-xl font-normal tracking-normal text-secondary md:max-w-[70%] md:text-2xl'>
            The languages, frameworks, libraries, and a collection of other software that I love to
            work with.
          </h3>

          <p className='mt-32 font-geist text-base text-primary'>
            Select a tab to learn more about the technologies I use.
          </p>
        </HeadContainer>
        <div className='relative mb-20 flex w-full flex-col justify-center lg:flex-row'>
          <div className='w-full px-4 pt-8 lg:w-[32.5rem] lg:pl-0 lg:pr-8 xl:w-[35rem]'>
            <button
              style={{
                backgroundColor:
                  selectedSkillTab === 'web-development' ?
                    'rgb(var(--background-secondary-hover))' :
                    '',
              }}
              className='mt-4 flex h-16 w-full items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'
              onClick={() => {
                setSelectedSkillTab('web-development');
              }}>
              <SiNextdotjs className='size-6 text-invert-secondary' />
              <p className='ml-4 font-geist text-lg text-secondary'>Web Development</p>
            </button>
            <button
              style={{
                backgroundColor:
                  selectedSkillTab === 'programming-languages' ?
                    'rgb(var(--background-secondary-hover))' :
                    '',
              }}
              className='mt-4 flex h-16 w-full items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'
              onClick={() => {
                setSelectedSkillTab('programming-languages');
              }}>
              {' '}
              <TbCode className='size-6 text-secondary' />
              <p className='ml-4 font-geist text-lg text-secondary'>Programming Languages</p>
            </button>
            <button
              style={{
                backgroundColor:
                  selectedSkillTab === 'deployment-tools' ?
                    'rgb(var(--background-secondary-hover))' :
                    '',
              }}
              className='mt-4 flex h-16 w-full items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'
              onClick={() => {
                setSelectedSkillTab('deployment-tools');
              }}>
              <SiDocker className='size-6 text-moby-blue' />
              <p className='ml-4 font-geist text-lg text-secondary'>
                Design, Integration, Deployment
              </p>
            </button>
            <button
              style={{
                backgroundColor:
                  selectedSkillTab === 'development-tools' ?
                    'rgb(var(--background-secondary-hover))' :
                    '',
              }}
              className='mt-4 flex h-16 w-full items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'
              onClick={() => {
                setSelectedSkillTab('development-tools');
              }}>
              <SiGit className='size-6 text-git-red' />
              <p className='ml-4 font-geist text-lg text-secondary'>Development</p>
            </button>
          </div>
          <div className='relative mb-32 mt-4 w-full px-4 lg:w-[32.5rem] lg:px-0 lg:pt-0 xl:w-150'>
            <div className='flex h-[500px] w-full flex-col overflow-hidden rounded-lg border border-secondary bg-secondary lg:absolute lg:-top-14 lg:ml-4'>
              <div className='flex h-16 w-full shrink-0 items-center justify-between border-b border-b-secondary bg-primary px-4'>
                <div className='flex items-center justify-center'>
                  {(() => {
                    switch (selectedSkillTab) {
                      case 'web-development':
                        return <SiNextdotjs className='size-6 text-invert-secondary' />;
                      case 'programming-languages':
                        return <TbCode className='size-6 text-secondary' />;
                      case 'deployment-tools':
                        return <SiDocker className='size-6 text-moby-blue' />;
                      case 'development-tools':
                        return <SiGit className='size-6 text-git-red' />;
                      default:
                        return <SiNextdotjs className='size-6 text-invert-secondary' />;
                    }
                  })()}
                  <h4 className='ml-2 pt-0.5 font-geist font-medium text-primary'>
                    {(() => {
                      switch (selectedSkillTab) {
                        case 'web-development':
                          return 'Web Development';
                        case 'programming-languages':
                          return 'Programming Languages';
                        case 'deployment-tools':
                          return 'Design, Integration, Deployment';
                        case 'development-tools':
                          return 'Development';
                        default:
                          return 'Web Development';
                      }
                    })()}
                  </h4>
                </div>
              </div>
              <div className='overflow-auto p-4 font-geist-mono text-xs text-primary'></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
