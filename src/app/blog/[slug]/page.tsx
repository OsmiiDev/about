import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you
import {Metadata, ResolvingMetadata} from 'next';

import BlogInner from './inner';
import {redirect} from 'next/navigation';

export async function generateMetadata(
    {
      params, searchParams,
    }: { params: { slug: string }; searchParams: URLSearchParams },
    parent: ResolvingMetadata,
): Promise<Metadata> {
  // const reqPro = navi
  const id = params.slug;
  const data = await fetch(`${process.env.NEXT_PUBLIC_BLOG_LOCATION}/posts/${id}.md`).then((res) => {
    if (res.ok) {
      return res.text();
    } else {
      if (res.status === 404) redirect('/');
      throw new Error('Failed to fetch');
    }
  });

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

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Blog({params}: {
  params: {
    slug: string;
  };
}) {
  return <BlogInner params={params} />;
}
