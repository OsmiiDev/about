'use client';

import {Header} from '@/components/layout/Header';
import {useEffect} from 'react';

import useSWR from 'swr';
import {SimpleGrid} from '@mantine/core';
import {useLocalStorage} from '@/hooks/LocalStorage';
import Link from 'next/link';

export default function Blog() {
  const [theme, _] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const modifiedFetch = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };
  const posts = useSWR<
    {
      id: string;
      title: string;
      date: number;
      tags: string[];
    }[]
  >('/api/blog', modifiedFetch);

  return (
    <>
      <Header />

      <main className='m-0 flex flex-col items-center justify-center p-0'>
        <div className='relative -z-10 flex h-[360px] w-full flex-col items-start justify-center border-b border-b-secondary bg-secondary px-4 sm:px-8 md:px-16'>
          <h2 className='font-jakarta text-7xl font-semibold tracking-tight text-primary'>Blog</h2>
          <h3 className='mt-8 font-jakarta text-2xl font-normal tracking-normal text-secondary'>
            A collection of my thoughts.
          </h3>
        </div>
        <div className='w-full px-4 sm:px-8 md:px-16'>
          <SimpleGrid
            cols={{
              base: 1,
              lg: 3,
              md: 2,
            }}
            className='mt-8 w-full'
            spacing='lg'>
            {posts.data ? (
              posts.data!.map((post) => (
                <Link key={post.id}
                  href={`/blog/${post.id}`}>
                  <div
                    className='mr-8 mt-4 flex h-32 w-full flex-col rounded-lg border border-secondary bg-secondary p-4'>
                    <div className='flex w-full items-center justify-start'>
                      {post.tags.map((tag) => (
                        <p
                          key={tag}
                          className='mr-2 rounded-full bg-accent-primary px-2 font-geist text-xs text-primary'>
                          {tag}
                        </p>
                      ))}
                    </div>

                    <div className='mt-2 flex flex-col'>
                      <p className='font-geist text-xl text-primary'>{post.title}</p>
                      <p className='font-geist text-sm text-secondary'>
                        {new Date(post.date * 1000).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div></div>
            )}
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}
