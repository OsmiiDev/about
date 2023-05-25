'use client';

import { Button, Header as MantineHeader, Menu, Modal, Text, TextInput } from '@mantine/core';
import {
  HiCommandLine,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePaperAirplane,
  HiOutlineRectangleGroup,
  HiOutlineWrenchScrewdriver,
  HiPaperAirplane,
  HiRectangleGroup,
  HiWrenchScrewdriver,
} from 'react-icons/hi2';
import { useEffect, useState } from 'react';

import { CgFormatSlash } from 'react-icons/cg';
import { HiOutlineMoon } from 'react-icons/hi';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import styles from './Header.module.css';

type Command = {
  click: () => void;
  icon: JSX.Element;
  name: string;
  right: JSX.Element;
  tag: string;
};

const commands: Command[] = [
  {
    click: () => {
      const root = document.querySelector(':root');
      root?.setAttribute('data-theme', root?.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', root?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

      return;
    },
    icon: <HiOutlineMoon className='ml-4 text-lg text-primary' />,
    name: 'Toggle Dark Mode',
    right: (
      <>
        <span className='pointer-events-none right-0 ml-1 inline-block rounded-sm border border-b-[2px] border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary'>CTRL</span>
        <span className='ml-1 inline-block text-xs text-primary'>+</span>
        <span className='pointer-events-none right-0 ml-1 inline-block rounded-sm border border-b-[2px] border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary'>D</span>
      </>
    ),
    tag: 'toggle dark mode',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineHome className='ml-4 text-lg text-primary' />,
    name: 'Home',
    right: <></>,
    tag: 'goto navigate go to home /',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineInformationCircle className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /about',
    right: <></>,
    tag: 'goto navigate go to about /about',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineChatBubbleLeftRight className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /blog',
    right: <></>,
    tag: 'goto navigate go to blog /blog',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlinePaperAirplane className='ml-4 -rotate-45 text-lg text-primary' />,
    name: 'Navigate to /contact',
    right: <></>,
    tag: 'goto navigate go to contact /contact',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineRectangleGroup className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /projects',
    right: <></>,
    tag: 'goto navigate go to project projects /project /projects',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineWrenchScrewdriver className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /skills',
    right: <></>,
    tag: 'goto navigate go to skill skills /skill /skills',
  },
];

export const Header: React.FC<object> = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        const header = document.querySelector('header.mantine-Header-root');
        if (header) {
          header.classList.remove('border-none');
          header.classList.add('border-b');
          header.classList.add('border-primary');

          header.classList.add('bg-[rgba(--var(background-secondary),0.5)]');
          header.classList.add('backdrop-blur-xl');

          header.classList.remove('sm:h-20');
          header.classList.remove('h-14');
          header.classList.add('sm:h-[60px]');
          header.classList.add('h-10');
        }
      } else {
        const header = document.querySelector('header.mantine-Header-root');
        if (header) {
          header.classList.remove('border-b');
          header.classList.remove('border-primary');
          header.classList.add('border-none');

          header.classList.remove('bg-[rgba(--var(background-secondary),0.5)]');
          header.classList.remove('backdrop-blur-xl');

          header.classList.remove('sm:h-[60px]');
          header.classList.remove('h-10');
          header.classList.add('sm:h-20');
          header.classList.add('h-14');
        }
      }
    });

    window.addEventListener('keydown', (event) => {
      if ((document.activeElement as HTMLElement)?.isContentEditable) return;

      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();

        setOpened(true);
      }

      if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();

        const root = document.querySelector(':root');
        root?.setAttribute('data-theme', root?.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', root?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
      }
    });
  });

  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <>
      <MantineHeader className='fixed left-0 top-0 z-50 mt-2 box-border flex h-12 w-screen items-center justify-between border-none bg-transparent sm:h-20 md:mt-0' height={72}>
        <div className='ml-2 flex items-center sm:ml-4'>
          <Link aria-label='Go to homepage' className='float-left ml-2 flex items-center sm:ml-4' href='/'>
            <div className='float-left mr-2 rounded-md bg-accent-secondary'>
              <CgFormatSlash className='text-2xl text-invert-secondary' />
            </div>
            <p className='float-left hidden font-jakarta text-[19px] font-bold sm:block'>
              <span className='text-primary'>osmii</span>
              <span className='text-accent-secondary'>.dev</span>
            </p>
          </Link>

          <Link className='float-left ml-2 sm:ml-10' href='/blog'>
            <p className='float-left font-jakarta text-xs font-semibold sm:text-sm'>
              <span className='text-accent-primary transition-colors hover:text-accent-primary-hover'>Blog</span>
            </p>
          </Link>

          <Link className='float-left ml-4 sm:ml-6' href='/blog'>
            <p className='float-left font-jakarta text-xs font-semibold sm:text-sm'>
              <span className='text-accent-primary transition-colors hover:text-accent-primary-hover'>About</span>
            </p>
          </Link>

          <div className='hidden items-center md:flex'>
            <Link className='float-left ml-8' href='/projects'>
              <p className='float-left font-jakarta text-sm font-semibold'>
                <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>Projects</span>
              </p>
            </Link>

            <div className='mx-3 h-[3px] w-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

            <Link className='float-left' href='/skills'>
              <p className='float-left font-jakarta text-sm font-semibold'>
                <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>Skills</span>
              </p>
            </Link>

            <div className='mx-3 h-[3px] w-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

            <Link className='float-left' href='/contact'>
              <p className='float-left font-jakarta text-sm font-semibold'>
                <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>Contact</span>
              </p>
            </Link>
          </div>

          <Menu
            styles={{
              dropdown: {
                '.mantine-Menu-item[data-hovered=true]': {
                  backgroundColor: 'rgba(var(--background-accent-secondary),0.25)',
                  color: 'rgb(var(--text-accent-hover))',
                },
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(var(--background-secondary), 0.75)',
                border: '1px solid rgb(var(--border-primary))',
                borderRadius: '0.5rem',
                color: 'rgb(var(--text-primary))',
                padding: '2rem',
              },
            }}
          >
            <Menu.Target>
              <Button className='float-left ml-4 block h-8 rounded-full bg-[rgba(var(--background-accent-secondary),0.6)] p-1 px-3 font-sans text-xs font-semibold text-primary transition-colors hover:bg-[rgba(var(--background-accent-secondary),0.7)] md:hidden md:h-10 md:px-4'>
                <span className='text-xs text-invert-secondary md:text-[16px]'>More</span>
                <svg className='ml-2 h-3 w-3 rotate-90 text-invert-secondary' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z'></path>
                </svg>
              </Button>
            </Menu.Target>

            <Menu.Dropdown className='p-2'>
              <Menu.Item
                className='rounded-lg bg-transparent font-jakarta font-semibold text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                icon={<HiRectangleGroup />}
              >
                <Link href='/projects'>Projects</Link>
              </Menu.Item>

              <Menu.Item
                className='rounded-lg bg-transparent font-jakarta font-semibold text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                icon={<HiWrenchScrewdriver />}
              >
                <Link href='/skills'>Skills</Link>
              </Menu.Item>

              <Menu.Item
                className='rounded-lg bg-transparent font-jakarta font-semibold text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                icon={<HiPaperAirplane />}
              >
                <Link href='/contact'>Contact</Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className='flex items-center'>
          <SiGithub className='hidden text-invert-secondary xs:inline-block' size={22}></SiGithub>
          <div className='mx-3 hidden h-3 w-0 border-x border-primary xs:inline-block'></div>
          <Button
            unstyled
            aria-label='Open command palette'
            className='mr-4 h-10 translate-y-0 rounded-lg bg-secondary px-3 font-sans font-semibold text-primary transition-colors hover:bg-secondary active:translate-y-[1px]'
            onClick={() => {
              setOpened(true);
            }}
          >
            <div className='flex items-center'>
              <HiCommandLine className='inline-block items-center text-sm' />
              <span className='ml-2 hidden text-sm font-medium lg:inline-block'>Command Palette</span>
              <span className='pointer-events-none ml-3 hidden rounded-sm border border-b-[2px] border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary lg:inline-block'>CTRL</span>
              <span className='ml-1 hidden pb-1 text-3xs lg:inline-block'>+</span>
              <span className='pointer-events-none ml-1 hidden rounded-sm border border-b-[2px] border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary lg:inline-block'>P</span>
            </div>
          </Button>
        </div>
      </MantineHeader>
      <Modal
        centered
        styles={{
          body: { padding: '6px' },
          content: {
            backgroundColor: 'rgb(var(--background-primary))',
            border: '1px solid rgba(rgb(var(--border-primary)), 0.35)',
            borderRadius: '0.5rem',
            maxHeight: '600px',
            overflow: 'hidden',
            padding: '0px !important',
            width: '600px',
          },
          root: { padding: '0px' },
        }}
        opened={opened}
        p={1}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <TextInput
          styles={{
            input: {
              ':focus': { borderColor: 'transparent' },
              backgroundColor: 'rgb(var(--background-secondary-hover))',
              borderColor: 'transparent',
              borderRadius: '0.5rem',
              boxSizing: 'border-box',
              color: 'rgb(var(--text-primary))',
              fontFamily: "'JetBrains Mono'",
              fontSize: '0.75rem',
              margin: '10px',
              width: 'calc(100% - 20px)',
            },
          }}
          onChange={(event) => {
            setQuery(event.target.value.toLowerCase());
          }}
        />
        <div className={`${styles.header} max-h-[500px] overflow-auto`}>
          {commands.map((command) =>
            query.split(' ').every((value) => command.tag.includes(value)) ? (
              <div key={command.tag} className='relative flex h-10 cursor-pointer flex-row items-center hover:bg-primary-hover' onClick={() => command.click()}>
                {command.icon} <Text className='ml-3 font-jakarta text-sm text-primary'>{command.name}</Text>
                <div className='absolute right-0 mr-3 flex items-center'>{command.right}</div>
              </div>
            ) : (
              <> </>
            )
          )}
        </div>
      </Modal>
    </>
  );
};
