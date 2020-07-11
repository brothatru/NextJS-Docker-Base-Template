import styles from './subheader.module.scss';

export default () => {
  return (
    <nav className={styles.subHeader}>
      <div>
        <p>All</p>
      </div>
      <div>
        <p>Articles</p>
      </div>
      <div>
        <p>Videos</p>
      </div>
      <div>
        <p>Worksheets</p>
      </div>
    </nav>
  );
};
