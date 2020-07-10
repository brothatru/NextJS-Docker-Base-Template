import styles from './hero.module.scss';

export default ({ children, image }) => (
  <div className={styles.root} style={{ backgroundImage: `url(${image})` }}>
    <div>{children}</div>
  </div>
);
