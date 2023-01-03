import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title key="title">0xStabby</title>
        <meta charSet="utf-8"/>
        <meta data-hid="description" name="description" content="I like to make cool stuff and share about it here" key="description" />
        <meta property="og:site_name" content="0xStabby" key="og:site_name" />
        <meta property="og:title" content="0xStabby" key="og:title" />
        <meta property="og:description" content="I like to make cool stuff and share about it here" key="og:description" />
        <meta property="twitter:title" content="0xStabby" key="twitter:title" />
        <meta property="twitter:description" content="I like to make cool stuff and share about it here" key="twitter:description" />
        <meta property="og:image" content="https://blog-0xstabby.vercel.app/Stabby.jpeg" key="og:image" />
        <meta property="og:image:type" content="image/png" key="og:image:width"/>
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta property="twitter:site" content="@0xStabby" key="twitter:site" />
        <meta property="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta property="twitter:image" content="https://blog-0xstabby.vercel.app/Stabby.jpeg" key="twitter:image" />
        <meta property="og:url" content="https://blog-0xstabby.vercel.app" key="og:url" />
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
