import Layout from '../../components/layout/layout';
import Container from '../../components/container/container';

import Hero from '../../components/hero/hero';
import Subtitle from '../../components/subtitle/subtitle';

import styles from './about.module.scss';

const About = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.bio}>
          <Subtitle>Engineer turned Life Coach</Subtitle>
          <p>
            I grew up in Los Angeles, CA and attended Venice High School, Eagle scout. Became a
            UC San Diego Chemical Engineer. Worked at ADI startup General Manager, Johnson &
            Johnson Validation Engineer, California Plastic Containers Quality Manufacturing
            engineer to Plant Manager. Got into coaching. Feedback from friends and coworkers
            from personal development meetings.
          </p>
        </div>
      </Container>
      <div className={styles.mission}>
        <div className={styles.picture}></div>
        <div className={styles.info}>
          <Subtitle>Mission</Subtitle>
          <p>
            There are complex problems in our individual lives and our world. Collaboration is
            solution. I believe we as humans have one common goal, to continuously improve our
            world so the future generation can live life a better life than those before them.
            I aspire to provide education and connect liked minded individuals
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
