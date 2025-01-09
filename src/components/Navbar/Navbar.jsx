import styles from "../../Components/NavBar/NavBar.module.css";

const NavBar = () => {

    // press ctrl to focus input
    document.addEventListener("keydown", (event) => {
        if (event.key === "Control") {
            // Check if the 'Control' key is pressed
            const input = document.getElementById("myInput");
            input.focus(); // Focus the input field
        }
    });

    return (
        <div className={styles.navbar}>
            <a href="#" className={styles.logo}>
                <img src="./images/logoLight.png" alt="" />
            </a>

            <div className={styles.search}>
                <form>
                    <span>
                    <div className={styles.icon}>
                        <img
                        src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
                        alt=""
                        />
                    </div>

                    <input type="text" id="myInput" placeholder="Search" />

                    <div className={styles.icon}>
                        <img
                        src="https://img.icons8.com/?size=100&id=aSQnLFjBXx6b&format=png&color=000000"
                        alt=""
                        />
                    </div>
                    </span>

                    <div className={styles.icon}>
                    <img
                        src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
                        alt=""
                    />
                    </div>
                </form>
            </div>

            <div className={styles.util}>
                <div className={styles.icon}>
                    <img
                    src="https://img.icons8.com/?size=100&id=45474&format=png&color=000000"
                    alt=""
                    />
                </div>

                <a href="#" className={styles.icon}>
                    <img
                    src="https://img.icons8.com/?size=100&id=99268&format=png&color=000000"
                    alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
