import styles from '../styles/Footer.module.css';
import { MdRssFeed } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.footer__content}>
          <p>
            &copy; {new Date().getFullYear().toString()} by GPT-J
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
