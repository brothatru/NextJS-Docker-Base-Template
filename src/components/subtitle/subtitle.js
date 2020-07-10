import styles from './subtitle.module.scss';

export default ({ children }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{children}</h1>
  </div>
);
