import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Hero from '../../components/hero/hero';

const Education = () => {
  return (
    <Layout>
      <Hero image={'/images/education-kuma-kum.jpg'}></Hero>
      <Container>
        <h1>Education Page</h1>
        <p>Welcome to BucketList System</p>
        <p>PHR something</p>
      </Container>
    </Layout>
  );
};

export default Education;
