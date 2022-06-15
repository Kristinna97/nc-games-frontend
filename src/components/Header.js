import styles from "./Header.module.css";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const Header = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <>
        <header className={styles.header}>
          <img className={styles.logo} src={require("../logo.png")}></img>

          <p className={styles.loggedInUser}>
            <span className="material-symbols-outlined">account_circle</span>{" "}
            {user.username}
          </p>
        </header>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.header}>
          <img className={styles.logo} src={require("../logo.png")}></img>
          <h1 className={styles.title}> NC Games</h1>
        </div>
      </>
    );
  }
};

export default Header;
