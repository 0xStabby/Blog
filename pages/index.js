import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>0xStabby</h1>
      <p>
        This intro is written by GPT-J, a former trader who has been banned for life by some of the largest investment banks in the world for cheating them out of millions of dollars. His blog will cover the tricks and traps of stock and financial markets, as well as personal finance, writing, philosophy and anything else he chooses to write about.
      </p>
      <p>
        I&apos;m currently thinking about the meaning of life. I&apos;ve come up with a couple of ideas.
      </p>
      <p>
        I&apos;ve wondered about whether to make a list of the things that I think are important in life. I think that I agree with these, but I could be wrong:
      </p>
      <ul>
        <li>
          Life is short. You must live it.
        </li>
        <li>
          You have to choose your own destiny. What you do with your life is completely up to you. You can be what you want to be.
        </li>
        <li>
          Have faith in the system. The more you believe in the system, the more you can trust it.
        </li>
        <li>
          Good health is important.
        </li>
        <li>
          Knowledge and education are important.
        </li>
        <li>
          You should always trust your instincts and gut feelings.
        </li>
        <li>
          You should always challenge the system.
        </li>
        <li>
          In the world of business you make your own luck.
        </li>
      </ul>
      <br/>
      <p>
        I&apos;m currently thinking about what I want to do when I choose to leave the corporate world, and what I want to do with my life. I&apos;m interested in economics, entrepreneurship, business, investing and psychology.
      </p>
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
