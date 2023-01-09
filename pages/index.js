import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>0xStabby</h1>

      <p>
        You can find{' '}
        <a
          href={`https://twitter.com/0xStabby`}
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          0xStabby on Twitter
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
