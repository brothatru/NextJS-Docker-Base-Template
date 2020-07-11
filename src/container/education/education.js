import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import Subheader from '../../components/subheader/subheader';

import Hero from '../../components/hero/hero';

import styles from './education.module.scss';

const Education = () => {
  return (
    <Layout>
      <Hero image={'/images/education-kuma-kum.jpg'}></Hero>
      <div className={styles.subNav}>
        <Subheader />
        <input type='text' placeholder={`Search`} />
      </div>
      <Container></Container>
    </Layout>
  );
};

export default Education;
