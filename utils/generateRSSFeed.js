import fs from 'fs';
import RSS from 'rss';
import { getSortedPost } from './mdx';

export default async function generateRssFeed() {
 const site_url = 'localhost:3001';
 const allPosts = await getSortedPost();

 const feedOptions = {
  title: 'Blog posts | RSS Feed',
  description: 'Welcome to this blog posts!',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
 };

 const feed = new RSS(feedOptions);

 allPosts.map((post) => {
  feed.item({
   title: post.title,
   description: post.description,
   url: `${site_url}/blog/${post.slug}`,
   date: post.date,
  });
 });

 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
