import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { getSortedPost } from '../../utils/mdx';

import styles from '../../styles/Blog.module.css';
import generateRssFeed from '../../utils/generateRSSFeed';

export async function getStaticProps(context) {
  const host = "https://blog-0xstabby.vercel.app"; // would like to make this dynamic yet...
  await generateRssFeed(host);
  const postsData = await getSortedPost();
  return {
    props: {
      postsData,
    },
  };
}

const Blog = ({ postsData }) => {
  return (
    <>
      <h2>Feed:</h2>
      <ul>
        {postsData.map((post) => {
          const { slug, title, date, description } = post;
          return (
            <li className={styles.post_item} key={slug}>
              <Link href={`/blog/${slug}`}>
                <a className={styles.item__link}>
                  <article>
                    <h2>{title}</h2>
                    <div className={styles.post__meta}>
                      <span className={styles.post__meta}>
                        {format(parseISO(date), 'MMMM dd, yyyy')}
                      </span>{' '}
                    </div>
                    <p>{description}</p>
                  </article>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
