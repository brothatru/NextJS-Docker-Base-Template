import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Hero from '../../components/hero/hero';
import Title from '../../components/title/title';
import styles from './home.module.scss';

import Quiz from '../../components/quiz/quiz';

const Home = () => {
  return (
    <Layout>
      <Hero image='/images/home-hero.jpg' style={{ background: 'rgba(0, 0, 0, 0.15)' }}>
        <Title>Let's sustain a purposeful change in your life</Title>
      </Hero>
      <Container>
        <div className={styles.content}>
          <p>We help you sustain change by...</p>
          <p>Clarifying Your Vision</p>
          <p>Implementing Habits</p>
          <p>Building Accountability</p>
          <div className={styles.start}>Start here.</div>
        </div>
      </Container>
      <Quiz />
    </Layout>
  );
};

export default Home;
