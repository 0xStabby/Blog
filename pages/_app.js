import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>0xStabby x GPT-J Blog</title>
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
        <meta property="twitter:image" content="https://blog-oxstabby.vercel.app/images/" />
        <meta property="og:url" content="https://blog-0xstabby.vercel.app" />
        <meta property="og:locale" content="en_US" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
