import { Link } from "react-router-dom";
import styles from "./navbar.styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";

export const Navbar: React.FC = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <nav className={styles.navbar}>
      <Link className={styles["navbar-title"]} to={"/"}>
        Commercial
      </Link>
      {!user ? (
        <Link className={styles["navbar-link"]} to={"/login"}>
          Log In
        </Link>
      ) : (
        <div className={styles["navbar-dropdown-container"]}>
          <p className={styles["navbar-dropdown-title"]}>
            Welcome, {user.firstName}
          </p>
          <div className={styles["navbar-dropdown-menu"]}>
            <Link className={styles["navbar-dropdown-link"]} to={"/logout"}>
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
