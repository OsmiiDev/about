'use client';

import { HiDocumentText, HiDownload, HiOutlineInformationCircle } from 'react-icons/hi';
import { Popover, Tooltip } from '@mantine/core';
import { SiDiscord, SiSignal, SiX } from 'react-icons/si';

import { TbMail, TbQuestionMark } from 'react-icons/tb';

import { Header } from '@/components/layout/Header';
import { showNotification } from '@mantine/notifications';
import styles from './page.module.css';
import { useEffect } from 'react';
import Link from 'next/link';

const HARDCODED_PGP_KUBLIC_KEY_BECAUSE_IM_LAZY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBGbT1tIBCAC2vt7v4FylPUVdLct9+7s7B8kttMtw3+AnH6gcZFgCFH/j4d8+
akvu8mWWsaSQFKA4pGtZ6UDHTsEz3PDthBXPCDXOw3wxTf0XGENm0qLvwXwhKomK
1L03UOc49eNoivT3W4PDLeWJsdH9ai/kfHc4+oCFkyoZwVgNP24icvI4LUq8P1A1
ZNgIoMJkuXmfqfuaXMIFYhKZHGuZxmn/Wzqy5ZgeGvUO0YatvOVVx7wv85Ux0gxj
35SJYRnjcT/xqJspVkGp/I13mYoKAnfhr8JtmozyuzHENSepdmOQpD5n0g7gIEnb
8pgKL5ULq22Zcs3ZpFObaNnoeBSH+rNAfP5FABEBAAG0GU9zbWlpIDxjb250YWN0
QG9zbWlpLmRldj6JAVQEEwEKAD4WIQTIfkbWmQGAw7Lkq7qSHbcjuQXvHgUCZtPW
0gIbAwUJAeEzgAULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRCSHbcjuQXvHhzf
B/90Plz8cdMMWXXyamxp4v6jlRWPo9KKVL1JA/cv9XEfQonfqJ9ALYwpWKQivNai
OXhSOfAy//vfKvJ9lnasjwMSDHkQbC3VqP+L8Nt6rTwF0JpILtiGV2r9QT0Md/Ma
sWVaWAB0VA5/ZNZQ2gliYX8VyrbzIPsZbFRTuQ37Umag5QSMP3lFR8hgmi3Bh2Kp
N42mWJXM2HKz4gEAvympxL3acVwjJlB5CaLVyRs3WWdJFAKGGbny869NuFunR1jK
y/FsUDGp5ZD1J57EhTdZ+FWz0SxaKuiiuw+46CcrS4FpWGqbLc1RjW42lj1EGdAW
qSTjacPYgR60/tAMsLNW/GYtuQENBGbT1tIBCAC26vwUyCLp+DlQTmhAvONd9Ske
fx9iakUAW+tdLncOd6miOWyjOlQFSWEclZxGCbuOurLtwX9mhFQc04MqBc//zCtD
8xJ2ehwYZYT3uHIWfzFKCdzYYONrNHHMYVhaTsnlFl0m2DPoAF9Ap4wlhwUSJt81
q/+LTf37J1akGXeYeFO/2OY0xbUWlwTuWOpXm+rlizjm6cg9RKKsnnVJHJ3Z4/sI
aAhFuQ4p3GksQ+haJz6C/LGRFB4NIxzBnmA7b2lgjTbKX0dwUE+j6kPeKPddR7OU
/oJaZbVtBU8mIfnqLyHWM74L9NfsWUwW6gNrv3ObQiXiP6dwsLIk3vYO0b43ABEB
AAGJATwEGAEKACYWIQTIfkbWmQGAw7Lkq7qSHbcjuQXvHgUCZtPW0gIbDAUJAeEz
gAAKCRCSHbcjuQXvHhN1B/9dkX+os5bQOnzW6zRx93EGmLD3HaMrJJ8Tp0uBQAOs
6Q3d5Fi1ZVmz9uUvqPvU+c+9YkYVSswo9ZIuEAVjVYyTEVP+n62r7YEVNlrlTXg2
mHfLtp4kWp3AJM151iM4iTJWlOi5hwyZpHNVvQs9xqeF5cbHB3COG0j4q+2rEZQ9
YD7BfEKGkr3FsYQ6PiXtOg8LwPNCX3+g1RbA5WmsxTGildr6AgaM0imnaJdZ8Of2
xeoioME+ih6CCeKAtH8OebqnOW8DOS/+PU4DdZ4EX7IHEyalPPgolW6UBUxesfJS
u5KfJMVFJiQD6bhHnYRolVM7QcnU8URBOj0C8+gFnRsx
=/+7w
-----END PGP PUBLIC KEY BLOCK-----`;

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
            <h4
              className={`${styles.category} mb-1 ml-2 font-geist text-xl font-medium tracking-normal text-accent-primary`}>
              Work
            </h4>
            <h2
              className={`${styles.contact} font-geist text-7xl font-medium tracking-normal text-primary`}>
              Contact
            </h2>
            <h3 className='mt-8 font-jakarta text-xl font-normal tracking-normal text-secondary md:text-2xl'>
              If you want to get in touch, feel free to use any of the methods below.
            </h3>
          </div>
        </div>
        <div className='relative mb-20 flex w-full flex-col justify-center lg:flex-row'>
          <div className='w-full px-4 pt-8 lg:w-[32.5rem] lg:pl-0 lg:pr-8 xl:w-[35rem]'>
            <Link href='https://discord.com/users/856580960073547787'>
              <div className='mt-4 flex h-16 items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'>
                <SiDiscord className='h-6 w-6 text-blurple' />
                <p className='ml-4 font-geist-mono text-lg text-secondary'>@osmiidev</p>
              </div>
            </Link>
            <Link href='https://discord.com/users/328984108271140864'>
              <div className='mt-4 flex h-16 items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'>
                <SiDiscord className='h-6 w-6 text-blurple' />
                <p className='ml-4 font-geist-mono text-lg text-secondary'>@osmii</p>
              </div>
            </Link>
            <Link href='mailto:contact@osmii.dev'>
              <div className='mt-4 flex h-16 items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'>
                <TbMail className='h-6 w-6 text-secondary' />
                <p className='ml-4 font-geist-mono text-lg text-secondary'>contact@osmii.dev</p>
              </div>
            </Link>
            <Link href='https://x.com/osmiidev'>
              <div className='mt-4 flex h-16 items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'>
                <SiX className='h-6 w-6 text-primary' />
                <p className='ml-4 font-geist-mono text-lg text-secondary'>@osmiidev</p>
              </div>
            </Link>
            <Link href='https://signal.me/#eu/vIOyMAaItIHOU62PKvLrJoVxVYOKfrWvIjcYLuBcwx7N5B7pjoFAOotjvS2OtS70'>
              <div className='mt-4 flex h-16 items-center justify-start rounded-lg border border-secondary bg-secondary pl-4 transition-colors hover:border-secondary-hover'>
                <SiSignal className='h-6 w-6 text-accent-secondary' />
                <p className='ml-4 font-geist-mono text-lg text-secondary'>Osmii.76</p>
              </div>
            </Link>
          </div>
          <div className='relative mb-32 mt-4 w-full px-4 lg:w-[32.5rem] lg:px-0 lg:pt-0 xl:w-[37.5rem]'>
            <div className='flex h-[500px] w-full flex-col overflow-hidden rounded-lg border border-secondary bg-secondary lg:absolute lg:-top-14 lg:ml-4'>
              <div className='flex h-[4rem] w-full shrink-0 items-center justify-between border-b border-b-secondary bg-primary px-4'>
                <div className='flex items-center justify-center'>
                  <HiDocumentText className='mr-1 h-5 w-5 text-primary' />
                  <h4 className='pt-0.5 font-geist font-medium text-primary'> PGP Public Key </h4>
                  <Popover
                    styles={{
                      dropdown: {
                        backgroundColor: 'rgb(var(--background-primary))',
                        borderColor: 'rgb(var(--border-secondary))',
                        fontFamily: "'Geist', sans-serif",
                      },
                    }}>
                    <Popover.Target>
                      <div className='ml-2 hidden h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary-hover sm:flex'>
                        <TbQuestionMark className='h-4 w-4 text-primary' />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown title='What is a PGP key?'>
                      <p className='font-geist text-xs font-medium text-primary'>
                        PGP keys allow you to verify that a message claimed to have come from me
                        actually did.{' '}
                        <Link
                          className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'
                          href='https://en.wikipedia.org/wiki/Pretty_Good_Privacy'>
                          Learn more
                        </Link>
                        .
                      </p>
                    </Popover.Dropdown>
                  </Popover>
                </div>
                <div className='flex items-center justify-center'>
                  <div
                    className='flex h-8 cursor-pointer items-center justify-center rounded-full bg-secondary px-3 transition-colors hover:bg-secondary-hover'
                    onClick={() => {
                      // ask for file download permission
                      const element = document.createElement('a');
                      element.setAttribute(
                        'href',
                        'data:text/plain;charset=utf-8,' +
                          encodeURIComponent(HARDCODED_PGP_KUBLIC_KEY_BECAUSE_IM_LAZY)
                      );

                      element.setAttribute('download', 'osmii-public-key.asc');
                      element.style.display = 'none';
                      document.body.appendChild(element);
                      element.click();
                    }}>
                    <HiDownload className='mr-1 h-4 w-4 text-primary' />
                    <p className='font-geist text-xs font-medium uppercase text-primary'>
                      Download
                    </p>
                  </div>
                </div>
              </div>
              <div className='overflow-auto p-4 font-geist-mono text-xs text-primary'>
                {HARDCODED_PGP_KUBLIC_KEY_BECAUSE_IM_LAZY.split('\n').map((line, index) => (
                  <div key={index} className='text-primary'>
                    {line}
                    <br></br>
                  </div>
                )) ?? 'Failed to load PGP public key. Let me know!'}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
