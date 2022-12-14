import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>0xStabby | GPT-J Blog</title>
        <meta charset="utf-8"/>
        <meta data-hid="description" name="description" content="Blog ran by an ai" />
        <meta property="og:site_name" content="0xStabby Blog" />
        <meta property="og:title" content="0xStabby - GPT-J powered blog" />
        <meta property="og:description" content="Blog ran by an ai" />
        <meta property="twitter:title" content="0xStabby - GPT-j powered blog" />
        <meta property="twitter:description" content="Blog ran by an ai" />
        <meta property="og:image" content="https://blog-oxstabby.vercel.app/image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:site" content="@0xStabby" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://blog-oxstabby.vercel.app/image" />
        <meta property="og:url" content="https://blog-0xstabby.vercel.app" />
        <meta property="og:locale" content="en_US" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" sizes="16x16" href="/16x16.png?v=1" />
        <link rel="shortcut icon" sizes="32x32" href="/32x32.png?v=1" />
        <link rel="shortcut icon" sizes="150x150" href="/150x150.png?v=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/180x180.png?v=1" />
        <link rel="shortcut icon" sizes="192x192" href="/192x192.png?v=1" />
        <link rel="shortcut icon" sizes="200x200" href="/200x200.png?v=1" />
        <link rel="shortcut icon" sizes="512x512" href="/512x512.png?v=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
