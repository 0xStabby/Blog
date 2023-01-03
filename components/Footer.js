import styles from '../styles/Footer.module.css';
import { MdRssFeed } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.footer__content}>
          <p>
            &copy; {new Date().getFullYear().toString()} by {' '}
              <a
                href={`https://twitter.com/0xStabby`}
                target="_blank"
                rel="noopener noreferrer"
                title="twitter"
              >
                0xStabby
              </a>
          </p>
          <a
            href="/rss.xml"
            rel="noreferrer"
            target="_blank"
          >
            <MdRssFeed color="#ee802f" size="30px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
