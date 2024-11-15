'use client';

import {Button, Menu, Modal, Text, TextInput} from '@mantine/core';
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
import {ChangeEvent, useEffect, useState} from 'react';

import {CgFormatSlash} from 'react-icons/cg';
import {HiOutlineMoon} from 'react-icons/hi';
import Link from 'next/link';
import {SiGithub} from 'react-icons/si';
import styles from './Header.module.css';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';

type Command = {
  click: (router: AppRouterInstance) => void;
  icon: JSX.Element;
  name: string;
  right: JSX.Element;
  tag: string;
};

const commands: Command[] = [
  {
    click: (router: AppRouterInstance) => {
      const root = document.querySelector(':root');
      root?.setAttribute(
          'data-theme',
        root?.getAttribute('data-theme') === 'dark' ? 'light' : 'dark',
      );
      localStorage.setItem('theme', root?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

      return;
    },
    icon: <HiOutlineMoon className='ml-4 text-lg text-primary' />,
    name: 'Toggle Dark Mode',
    right: (
      <>
        <span className='border-b-px pointer-events-none right-0 ml-1 inline-block rounded-sm border border-primary bg-primary p-1 py-[4px] font-geist text-3xs font-medium text-primary'>
          CTRL
        </span>
        <span className='ml-1 inline-block text-xs text-primary'>+</span>
        <span className='border-b-px pointer-events-none right-0 ml-1 inline-block rounded-sm border border-primary bg-primary p-1 py-[4px] font-geist text-3xs font-medium text-primary'>
          D
        </span>
      </>
    ),
    tag: 'toggle dark mode',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/');
      return;
    },
    icon: <HiOutlineHome className='ml-4 text-lg text-primary' />,
    name: 'Home',
    right: <></>,
    tag: 'goto navigate go to home /',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/about');
      return;
    },
    icon: <HiOutlineInformationCircle className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /about',
    right: <></>,
    tag: 'goto navigate go to about /about',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/blog');
      return;
    },
    icon: <HiOutlineChatBubbleLeftRight className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /blog',
    right: <></>,
    tag: 'goto navigate go to blog /blog',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/contact');
      return;
    },
    icon: <HiOutlinePaperAirplane className='ml-4 -rotate-45 text-lg text-primary' />,
    name: 'Navigate to /contact',
    right: <></>,
    tag: 'goto navigate go to contact /contact',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/projects');
      return;
    },
    icon: <HiOutlineRectangleGroup className='ml-4 text-lg text-primary' />,
    name: 'Navigate to /projects',
    right: <></>,
    tag: 'goto navigate go to project projects /project /projects',
  },
  {
    click: (router: AppRouterInstance) => {
      router.push('/skills');
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
        const header = document.querySelector('div#header-root');
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
        const header = document.querySelector('div#header-root');
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
        root?.setAttribute(
            'data-theme',
          root?.getAttribute('data-theme') === 'dark' ? 'light' : 'dark',
        );
        localStorage.setItem(
            'theme',
          root?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
        );
      }
    });
  });

  const router = useRouter();

  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <>
      <div
        className='fixed left-0 top-0 z-50 mt-2 box-border flex h-12 w-screen items-center justify-between border-none bg-transparent sm:h-20 md:mt-0'
        id='header-root'>
        <div className='ml-2 flex items-center sm:ml-4'>
          <Link
            aria-label='Go to homepage'
            className='float-left ml-2 flex items-center sm:ml-4'
            href='/'>
            <div className='float-left mr-2 rounded-md bg-accent-secondary'>
              <CgFormatSlash className='text-2xl text-invert-secondary' />
            </div>
            <p className='float-left hidden font-jakarta text-[19px] font-semibold sm:block'>
              <span className='text-primary'>osmii</span>
              <span className='text-accent-secondary'>.dev</span>
            </p>
          </Link>

          <Link className='float-left ml-2 sm:ml-10' href='/blog'>
            <p className='float-left font-geist text-xs font-medium text-accent-secondary transition-colors hover:text-accent-primary-hover sm:text-sm'>
              Blog
            </p>
          </Link>

          <Link className='float-left ml-4 sm:ml-6' href='/about'>
            <p className='float-left font-geist text-xs font-medium text-accent-secondary transition-colors hover:text-accent-primary-hover sm:text-sm'>
              About
            </p>
          </Link>

          <div className='hidden items-center md:flex'>
            <Link className='float-left ml-8' href='/projects'>
              <p className='float-left font-geist text-xs font-medium text-accent-primary transition-colors hover:text-accent-primary-hover sm:text-sm'>
                Projects
              </p>
            </Link>

            <div className='mx-3 size-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

            <Link className='float-left' href='/skills'>
              <p className='float-left font-geist text-xs font-medium text-accent-primary transition-colors hover:text-accent-primary-hover sm:text-sm'>
                Skills
              </p>
            </Link>

            <div className='mx-3 size-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

            <Link className='float-left' href='/contact'>
              <p className='float-left font-geist text-xs font-medium text-accent-primary transition-colors hover:text-accent-primary-hover sm:text-sm'>
                Contact
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
                'backdropFilter': 'blur(10px)',
                'backgroundColor': 'rgba(var(--background-secondary), 0.75)',
                'border': '1px solid rgb(var(--border-primary))',
                'borderRadius': '0.5rem',
                'color': 'rgb(var(--text-primary))',
                'padding': '2rem',
              },
            }}>
            <Menu.Target>
              <Button className='float-left ml-4 block h-8 rounded-full bg-[rgba(var(--background-accent-secondary),0.6)] p-1 px-3 font-sans text-xs font-medium text-primary transition-colors hover:bg-[rgba(var(--background-accent-secondary),0.7)] md:hidden md:h-10 md:px-4'>
                <span className='text-xs text-invert-secondary md:text-[16px]'>More</span>
                <svg
                  className='ml-2 size-3 rotate-90 text-invert-secondary'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z'></path>
                </svg>
              </Button>
            </Menu.Target>

            <Menu.Dropdown className='p-2'>
              <Menu.Item
                className='rounded-lg bg-transparent font-geist font-medium text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                leftSection={<HiRectangleGroup />}>
                <Link href='/projects'>Projects</Link>
              </Menu.Item>

              <Menu.Item
                className='rounded-lg bg-transparent font-geist font-medium text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                leftSection={<HiWrenchScrewdriver />}>
                <Link href='/skills'>Skills</Link>
              </Menu.Item>

              <Menu.Item
                className='rounded-lg bg-transparent font-geist font-medium text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
                leftSection={<HiPaperAirplane />}>
                <Link href='/contact'>Contact</Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className='flex items-center'>
          <Link aria-label='Go to GitHub' href={'https://github.com/osmiidev'} target='_blank'>
            <SiGithub
              className='hidden text-invert-secondary transition-all hover:text-secondary xs:inline-block'
              size={22}></SiGithub>
          </Link>
          <div className='mx-3 hidden h-3 w-0 border-x border-primary xs:inline-block'></div>
          <Button
            unstyled
            aria-label='Open command palette'
            className='mr-4 h-10 translate-y-0 rounded-lg border border-primary bg-secondary px-3 font-sans font-medium text-primary transition-colors hover:bg-secondary active:translate-y-px'
            onClick={() => {
              setOpened(true);
            }}>
            <div className='flex items-center'>
              <HiCommandLine className='inline-block items-center text-sm' />
              <span className='ml-2 hidden font-geist text-sm font-medium lg:inline-block'>
                Command Palette
              </span>
              <span className='border-b-px pointer-events-none ml-3 hidden rounded-sm border border-primary bg-primary p-1 py-[4px] font-geist-mono text-3xs font-medium text-primary lg:inline-block'>
                CTRL
              </span>
              <span className='ml-1 hidden pb-1 text-3xs lg:inline-block'>+</span>
              <span className='border-b-px pointer-events-none ml-1 hidden rounded-sm border border-primary bg-primary p-1 py-[4px] font-geist-mono text-3xs font-medium text-primary lg:inline-block'>
                P
              </span>
            </div>
          </Button>
        </div>
      </div>

      <Modal
        centered
        styles={{
          body: {padding: '6px'},
          content: {
            backgroundColor: 'rgb(var(--background-primary))',
            border: '1px solid rgba(rgb(var(--border-primary)), 0.35)',
            borderRadius: '0.5rem',
            maxHeight: '600px',
            overflow: 'hidden',
            padding: '0px !important',
            width: '600px',
          },
          root: {padding: '0px'},
        }}
        className='fixed'
        opened={opened}
        p={1}
        withCloseButton={false}
        onClose={() => setOpened(false)}>
        <TextInput
          styles={{
            input: {
              ':focus': {borderColor: 'transparent'},
              'backgroundColor': 'rgb(var(--background-secondary-hover))',
              'borderColor': 'transparent',
              'borderRadius': '0.5rem',
              'boxSizing': 'border-box',
              'color': 'rgb(var(--text-primary))',
              'fontFamily': '\'JetBrains Mono\'',
              'fontSize': '0.75rem',
              'margin': '10px',
              'paddingLeft': '8px',
              'width': 'calc(100% - 20px)',
            },
          }}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value.toLowerCase());
          }}
        />
        <div className={`${styles.header} max-h-[500px] overflow-auto`}>
          {commands.map((command) =>
            query.split(' ').every((value) => command.tag.includes(value)) ? (
              <div
                key={command.tag}
                className='relative flex h-10 cursor-pointer flex-row items-center hover:bg-primary-hover'
                onClick={() => command.click(router)}>
                {command.icon}{' '}
                <Text className='ml-3 font-geist text-sm text-primary'>{command.name}</Text>
                <div className='absolute right-0 mr-3 flex items-center'>{command.right}</div>
              </div>
            ) : (
              <> </>
            ),
          )}
        </div>
      </Modal>
    </>
  );
};
