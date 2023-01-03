import fs from 'fs';
import RSS from 'rss';
import { getSortedPost } from './mdx';

export default async function generateRssFeed(host) {
 const site_url = host;
 const allPosts = await getSortedPost();

 const feedOptions = {
  title: '0xStabby',
  description: 'I like making cool stuff and this is where I share about it',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, 0xStabby`,
 };

 const feed = new RSS(feedOptions);

 allPosts.map((post) => {
   //console.log("content: ", content);
   feed.item({
     title: post.title,
     description: post.description,
     url: `${site_url}/blog/${post.slug}`,
     date: post.date,
   //custom_elements: [{
   //  "Content": post.content
   //}]//.concat(post.authors.map((author) => ({ author: [{ name: author.name }] }))),
   });
 });

 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
