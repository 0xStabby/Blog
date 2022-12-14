import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import MDXComponents from '../../components/MdxComponents';
import { getPostDir, getFileBySlug } from '../../utils/mdx';
import { parseISO, format } from 'date-fns';
import Head from 'next/head';

import styles from '../../styles/SinglePost.module.css';
import slugify from 'slugify';

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime, description } = frontMatter;
  const noSpecialCharacters = title.replace(/[^a-zA-Z0-9 ]/g, '');
  let slug = slugify(noSpecialCharacters);
  let imageLink = "https://blog-0xstabby.vercel.app/images/" + slug + ".png";

  return (
    <article className={styles.single__post}>
      <Head>
        <title key="title">0xStabby x GPT-J Blog</title>
        <meta data-hid="description" name="description" content={description} key="description" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta property="og:image" content={imageLink} key="og:image" />
        <meta property="twitter:image" content={imageLink} key="twitter:image" />
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
