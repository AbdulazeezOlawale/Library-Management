import data from "../../data";
import styles from "../SideBar/SideBar.module.css";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [changeIcon, setChangeIcon] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const sidebarIcons = document.querySelectorAll("#sidebarIcons");
    if (sidebarIcons.length > 0) {
      sidebarIcons[0].classList.add(styles.activeSideBar);

      const handleClick = (index) => {
        // Update the active state
        sidebarIcons.forEach((item) => {
          item.classList.remove(styles.activeSideBar);
        });

        setChangeIcon((prevState) => prevState.map((_, i) => i === index));

        sidebarIcons[index].classList.add(styles.activeSideBar);
      };

      sidebarIcons.forEach((item, index) => {
        item.addEventListener("click", () => handleClick(index));
      });

      // Cleanup function to remove event listeners
      return () => {
        sidebarIcons.forEach((item, index) => {
          item.removeEventListener("click", () => handleClick(index));
        });
      };
    }
  }, []);

  return (
    <div className={styles.sideBar}>
      {data.SideBarData.map((item, index) => {
        return (
          <div
            className={`${styles.icons} ${styles.slider}`}
            id="sidebarIcons"
            key={item.icon}
          >
            {!changeIcon[index] ? (
              <img src={item.icon} alt="" />
            ) : (
              <img src={item.secondIcon} alt="" />
            )}
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
