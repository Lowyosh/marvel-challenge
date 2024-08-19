import React from "react";
import styles from "../components/Header.module.scss";
import { useFavorites } from "../context/FavContext";

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <section className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/">
          <img className={styles.marvelLogo} src="img/marvel-logo.jpg" />
        </a>

        <a className={styles.favorites} href="/favorites">
          <img className={styles.heartIcon} src="img/heart-icon.png" />
          <p className={styles.favoritesCount}>{favorites.length}</p>
        </a>
      </div>
    </section>
  );
};

export default Header;
