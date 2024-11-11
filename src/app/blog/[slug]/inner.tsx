'use client';

import styles from './page.module.css';

import {Header} from '@/components/layout/Header';
import {useLocalStorage} from '@/hooks/LocalStorage';
import {CSSProperties, useEffect, useState} from 'react';
import {HiLink, HiOutlineCalendarDays, HiOutlineClipboard} from 'react-icons/hi2';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

import AtomDark from './code-dark';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default function Blog({params}: {
  params: {
    slug: string;
  };
}) {
  const [theme, _] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [post, setPost] = useState('');
  const [meta, setMeta] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const id = params.slug;
    fetch(`/posts/${id}.md`)
        .then((data) => data.text())
        .then((data) => {
          console.log('data', data);
          const meta = data
              .split('---')[1]
              .split('\n')
              .map((line) => {
                const [key, value] = line.split(':');
                if (!key || !value) return {};
                return {[key]: value.trim()};
              })
              .reduce(
                  (acc, curr) => ({
                    ...acc,
                    ...curr,
                  }),
                  {},
              );

          console.log(meta);
          setPost(data.split('---').slice(2).join('---'));
          setMeta(meta);
        });
  }, [params.slug]);

  return (
    <>
      <Header />

      <main className='m-0 p-0 pl-8 md:pl-32 lg:pl-40 xl:pl-56'>
        <div className='mt-32 flex flex-col'>
          <h2 className='font-jakarta text-6xl font-semibold tracking-tight text-primary'>
            {meta.title}
          </h2>
        </div>
        <div className='flex w-full max-w-[800px] flex-col items-start justify-start pr-8 md:pr-16'>
          <p className='mt-6 font-geist text-3xl text-secondary'>{meta.description}</p>

          <div className='mb-6 mt-20 flex'>
            <HiOutlineCalendarDays className='size-6 text-secondary' />
            <p className='ml-2 font-geist text-secondary'>
              {' '}
              {new Date(parseInt(meta.date) * 1000).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className='flex w-full flex-col justify-start border-l-2 border-l-secondary pb-8 pl-4 md:mb-32 md:pl-16'>
            <Markdown
              components={{
                code({
                  node, className, children, ...props
                }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <div className='relative my-0.5 rounded-md border border-secondary bg-secondary'>
                      <SyntaxHighlighter
                        language={match[1]}
                        PreTag='div'
                        style={AtomDark as { [key: string]: CSSProperties }}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                      <div className='absolute right-2 top-2 flex size-8 cursor-pointer items-center justify-center rounded-md border border-primary bg-primary transition-transform hover:-translate-y-px active:translate-y-0'>
                        <HiOutlineClipboard className='text-secondary' />
                      </div>
                    </div>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1({
                  node, children, ...props
                }) {
                  return (
                    <div
                      className={styles.linkTo}
                      id={String(children).toLowerCase().replaceAll(' ', '-')}>
                      <div className='mr-2 flex size-8 items-center justify-center rounded-full'>
                        <button
                          className='flex size-[30px] shrink-0 items-center justify-center rounded-md border border-primary bg-primary text-secondary transition-all hover:-translate-y-px hover:bg-primary-hover active:translate-y-0'
                          onClick={() => {
                            window.location.href = `#${String(children)
                                .toLowerCase()
                                .replaceAll(' ', '-')}`;
                          }}>
                          <HiLink />
                        </button>
                      </div>

                      <h1 className='font-geist text-4xl font-semibold text-primary' {...props}>
                        {children}
                      </h1>
                    </div>
                  );
                },
                h2({
                  node, children, ...props
                }) {
                  return (
                    <div
                      className={styles.linkTo}
                      id={String(children).toLowerCase().replaceAll(' ', '-')}>
                      <div className='mr-2 flex size-8 items-center justify-center rounded-full'>
                        <button
                          className='flex size-[30px] shrink-0 items-center justify-center rounded-md border border-primary bg-primary text-secondary transition-all hover:-translate-y-px hover:bg-primary-hover active:translate-y-0'
                          onClick={() => {
                            window.location.href = `#${String(children)
                                .toLowerCase()
                                .replaceAll(' ', '-')}`;
                          }}>
                          <HiLink />
                        </button>
                      </div>

                      <h2 className='font-geist text-3xl font-semibold text-primary' {...props}>
                        {children}
                      </h2>
                    </div>
                  );
                },
              }}
              className={styles.markdown}
              rehypePlugins={[rehypeKatex]}
              remarkPlugins={[remarkMath]}>
              {post}
            </Markdown>
          </div>
        </div>
      </main>
    </>
  );
}
