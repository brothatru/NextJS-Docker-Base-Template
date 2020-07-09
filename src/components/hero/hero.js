import styles from './hero.module.scss';

export default ({ children }) => (
  <div className={styles.root}>
    <div>{children}</div>
  </div>
);
