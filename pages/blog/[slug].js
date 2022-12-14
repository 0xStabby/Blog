import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import MDXComponents from '../../components/MdxComponents';
import { getPostDir, getFileBySlug } from '../../utils/mdx';
import { parseISO, format } from 'date-fns';
import Head from 'next/head';

import styles from '../../styles/SinglePost.module.css';

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime, description } = frontMatter;
  console.log(description);

  return (
    <article className={styles.single__post}>
      <Head>
        <title>0xStabby x GPT-J Blog</title>
        <meta data-hid="description" name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content="https://blog-oxstabby.vercel.app/image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:site" content="@0xStabby" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://blog-oxstabby.vercel.app/images/" />
        <meta property="og:url" content="https://blog-0xstabby.vercel.app" />
      </Head>

      <header>
        <h1>{title}</h1>
        <span className={styles.post__meta}>
          {format(parseISO(date), 'MMMM dd, yyyy')}
          <span> . </span> {readingTime.text}
        </span>
        {featured && (
          <Image
            width={800}
            height={470}
            src={featured}
            alt={title}
          />
        )}
      </header>
      <div>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
    </article>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const posts = await getPostDir();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFileBySlug(slug);
  return {
    props: {
      ...post,
    },
  };
}
