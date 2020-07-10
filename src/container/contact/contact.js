import Layout from '../../components/layout/layout';
import ContactForm from '../../components/contact-form/contactForm';
import Container from '../../components/container/container';
import Link from 'next/link';

import styles from './contact.module.scss';

import Hero from '../../components/hero/hero';

const Contact = () => {
  return (
    <Layout>
      <Hero image='/images/contact.jpg'></Hero>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Let's get in touch.</h1>
          <p className={styles.faq}>
            Read my{' '}
            <Link href='/'>
              <a>FAQ</a>
            </Link>{' '}
            page
          </p>
        </div>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;
