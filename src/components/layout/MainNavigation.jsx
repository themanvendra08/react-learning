import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div id="logo" className={styles.logo}>
        React Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>

          <li>
            <Link to="/favorites">
              Favorites{" "}
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
