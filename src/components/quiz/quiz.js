import Subtitle from '../subtitle/subtitle';
import Link from 'next/link';
import Container from '../container/container';

import styles from './quiz.module.scss';

export default () => (
  <div className={styles.root}>
    <Container>
      <Subtitle>Unsure if you're the right fit?</Subtitle>
      <p>Take a free personality quiz to determine if our program is right for you.</p>
      <Link href='/'>
        <a>Start Quiz</a>
      </Link>
    </Container>
  </div>
);
