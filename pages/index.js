import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>0xStabby</h1>

      <h3>I like to make cool stuff and talk about it here.</h3>

      <p>
        You can find 0xStabby on{' '}
        <a
          href={`https://twitter.com/0xStabby`}
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          Twitter
        </a>
        {' '}and{' '}
        <a
          href={`https://github.com/0xStabby`}
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          Github
        </a>
        .
      </p>


    </div>
  );
};

export default Home;
