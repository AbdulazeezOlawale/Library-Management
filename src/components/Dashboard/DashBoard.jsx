import data from "../../data";
import styles from "../Dashboard/DashBoard.module.css";
import Util from "./Util/Util";
const DashBoard = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.item1}`}>1</div>
        <div className={`${styles.gridItem} ${styles.item2}`}>2</div>
        <div className={`${styles.gridItem} ${styles.item3}`}>
          <div className={styles.item3_container}>
            {data.record.map((dataItem, index) => (
              <div className={styles.recordItem} key={index}>
                <div className={styles.recordItem_icon}>
                  <img src={dataItem.icon} alt="" />
                </div>

                <div className={styles.desc}>
                  <p>{dataItem.heading}</p>
                  <small>{dataItem.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.item4}`}>
          <div className={styles.item4_container}>
            <p>BookWorm Admins</p>
            <Util
              desc="Admin ID : 1"
              img="./images/vector.png"
              para="Nisal Gunasekara"
              id={1}
            />
            <Util
              desc="Admin ID : 1"
              img="./images/vector.png"
              para="Nisal Gunasekara"
              id={2} />
            <Util
              desc="Admin ID : 1"
              img="./images/vector.png"
              para="Nisal Gunasekara"
              id={3} />
            <Util
              desc="Admin ID : 1"
              img="./images/vector.png"
              para="Nisal Gunasekara"
              id={4} />
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.item5}`}>
          <span>
            <img src="./images/3dpie.png" alt="pie" />
          </span>
        </div>
        <div className={`${styles.gridItem} ${styles.item6}`}>
          <span>
            <img src="./images/building.png" alt="" />
          </span>

          <span>
            {data.PieData.map((item, index) => (
              <div key={index} className={styles.list}>
                <div
                  style={{ backgroundColor: `${item.color}` }}
                  className={styles.bulletp}
                ></div>
                <small>{item.title}</small>
              </div>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
