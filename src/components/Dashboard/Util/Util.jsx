import styles from "../Util/Util.module.css";

const Util = ({desc, img, para, id}) => {
  return (
    <div className={styles.util} key={id}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <img src={img} alt="" />
        </div>

        <div className={styles.desc}>
          <p>{para}</p>
          <small>{desc}</small>
        </div>
      </div>
      <div className={styles.right}>
        <img src="./images/maximize-circle.png" alt="" />
      </div>
    </div>
  );
};

export default Util;