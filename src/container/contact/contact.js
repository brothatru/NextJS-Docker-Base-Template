import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Hero from '../../components/hero/hero';

const Contact = () => {
  return (
    <Layout>
      <Hero image='/images/contact.jpg'></Hero>
      <Container>
        <h1>Contact Page</h1>
        <p>Welcome to BucketList System</p>
        <p>PHR something</p>
      </Container>
    </Layout>
  );
};

export default Contact;
