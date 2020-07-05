import Link from 'next/link';
import { useState } from 'react';
import Icon from '../icon';
import { cn } from '../../lib/helpers';

const Header = ({ onHideNav, onShowNav, showNav }) => {
  const [toggleNav, setToggleNav] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const toggleToTrue = () => {
    if (toggle === false) setToggle(!toggle);
  };

  return (
    <div className='root'>
      <div className='wrapper'>
        <div className='branding'>
          <Link href='/'>
            <a>RYAN MORIMOTO</a>
          </Link>
          <button
            aria-label='nav-icon'
            className='toggleNavButton'
            onClick={showNav ? onHideNav : onShowNav}
            style={{ display: 'none' }}
          >
            <Icon symbol='hamburger' />
          </button>
        </div>

        <nav className={cn('header', showNav && 'showNav')}>
          <ul>
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
          <button
            className='toggleNavButton'
            onClick={showNav ? onHideNav : onShowNav}
            style={{ display: 'none' }}
          >
            <p>X</p>
          </button>
        </nav>
      </div>
      <style jsx>
        {`
          .root {
            position: relative;
            width: 100%;
            margin-top: 1rem;
          }
          .wrapper {
            box-sizing: border-box;
            margin: 0 auto;
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-family: 'Anonymous Pro';
            font-style: regular;
          }
          .branding {
            font-family: 'Bebas Neue';
            position: absolute;
            width: 330px;
            left: 2.33%;
            right: 78.85%;
            top: 0;
            bottom: 1;
          }
          .branding a {
            font-style: normal;
            font-weight: normal;
            font-size: 50px;
            line-height: 60px;
            display: inline-block;
            color: inherit;
            text-decoration: none;
          }

          .header {
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }
          .header ul {
            margin: 1em 0;
            padding: 10px 0;
            display: flex;
          }

          .header ul li {
            list-style: none;
            line-height: 18px;
            padding: 0 1.3em;
            width: 100%;
          }

          .header a:hover {
            border-bottom: 1px solid #000000;
          }

          .header a {
            background-color: transparent;
            text-decoration: none;
            color: #000000;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
          }
          .showNav {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
