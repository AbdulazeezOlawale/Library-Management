import data from "../../data";
import styles from "../Dashboard/DashBoard.module.css";
const DashBoard = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.item1}`}>1</div>
        <div className={`${styles.gridItem} ${styles.item2}`}>2</div>
        <div className={`${styles.gridItem} ${styles.item3}`}>
          
        </div>
        <div className={`${styles.gridItem} ${styles.item4}`}>4</div>
        <div className={`${styles.gridItem} ${styles.item5}`}>
          <span>
            <img src="./images/3dpie.png" alt="pie" />
          </span>
        </div>
        <div className={`${styles.gridItem} ${styles.item6}`}>
          <span>
            <img src="./images/SvgjsG2242.png" alt="" />
          </span>

          <span>
            {data.PieData.map((item, index) => (
              <div key={index} className={styles.list}>
                <div
                  style={{ backgroundColor: `${item.color}` }}
                  className={styles.bulletp}
                ></div>
                <p>{item.title}</p>
              </div>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
