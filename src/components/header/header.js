import Link from 'next/link';
import { useState } from 'react';
import Icon from '../icon';

import styles from './header.module.scss';

const Header = ({ onHideNav, onShowNav, showNav }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link href='/'>
            <a>RYAN MORIMOTO</a>
          </Link>
          <button
            className={styles.toggleNavButton}
            onClick={showNav ? onHideNav : onShowNav}
            aria-label='nav-icon'
          >
            {!showNav ? <Icon symbol='hamburger' /> : <div className={styles.hideNav}>X</div>}
          </button>
          {/* <button
            className={styles.hideNav}
            onClick={showNav ? onHideNav : onShowNav}
          >
            <p>X</p>
          </button> */}
        </div>

        <nav className={showNav ? styles.showNav : styles.tabs}>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/services'>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href='/education'>
                <a>Education</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/events'>
                <a>Events</a>
              </Link>
            </li> */}
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
