import Link from 'next/link';

import styles from './footer.module.scss';

export default () => (
  <footer className={styles.root}>
    <ul className={styles.navs}>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about/'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/services/'>
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href='/education/'>
          <a>Education</a>
        </Link>
      </li>
      {/* <li>
        <Link href='/events/'>
          <a>Events</a>
        </Link>
      </li> */}
      <li>
        <Link href='/contact/'>
          <a>Contact</a>
        </Link>
      </li>
    </ul>
    <div className={styles.divider} />
    <ul className={styles.terms}>
      <li>
        <Link href='/'>
          <a>Press</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Terms and Conditions</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Privacy Policy</a>
        </Link>
      </li>
    </ul>
  </footer>
);
