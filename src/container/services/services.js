import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';
import Hero from '../../components/hero/hero';
import Title from '../../components/title/title';

const Services = () => {
  return (
    <Layout>
      <Hero image='/images/services-hero.jpg'>
        <Title>Our Coaching Process</Title>
      </Hero>
      <Container></Container>
    </Layout>
  );
};

export default Services;
