
import styles from '../Dashboard/DashBoard.module.css'

const DashBoard = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.item1}`}>1</div>
        <div className={`${styles.gridItem} ${styles.item2}`}>2</div>
        <div className={`${styles.gridItem} ${styles.item3}`}>3</div>
        <div className={`${styles.gridItem} ${styles.item4}`}>4</div>
        <div className={`${styles.gridItem} ${styles.item5}`}>5</div>
        <div className={`${styles.gridItem} ${styles.item6}`}>6</div>
      </div>
    </>
  );
};

export default DashBoard;
