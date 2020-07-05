import Link from 'next/link';

export default () => (
  <footer>
    <ul className='navs'>
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
    <div className='divider' />
    <ul className='terms'>
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
    <style jsx>{`
      background-color: #202342;
      padding: 10px;
      .navs,
      .terms {
        display: flex;
        justify-content: center;
        margin: 0;
      }
      a {
        color: #ceced9;
        text-decoration: none;
        list-style: none;
        font-family: 'Anonymous Pro';
        font-style: normal;
        font-weight: normal;
        margin: 0 1.2rem;
        font-size: 16px;
      }
      li {
        list-style: none;
      }

      .terms a {
        font-family: 'Lato';
        font-size: 16px;
      }
      .divider {
        content: '';
        height: 1px;
        width: 95%;
        margin: 0 auto;
        padding: 0;
        background-color: #dcfdee;
      }
    `}</style>
  </footer>
);
