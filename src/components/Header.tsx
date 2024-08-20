import React from "react";
import styles from "../components/Header.module.scss";
import { useFavorites } from "../context/FavContext";
import Link from "next/link";

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <section className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img className={styles.marvelLogo} src="img/marvel-logo.jpg" />
        </Link>

        <Link className={styles.favorites} href="/favorites">
          <img className={styles.heartIcon} src="img/heart-icon.png" />
          <p className={styles.favoritesCount}>{favorites.length}</p>
        </Link>
      </div>
    </section>
  );
};

export default Header;
