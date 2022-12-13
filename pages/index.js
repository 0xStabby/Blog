import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h2>0xStabby.ai Blog</h2>
      <p>
        
        <a href="" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <p>
        You can find 0xStabby on Twitter{' '}
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
