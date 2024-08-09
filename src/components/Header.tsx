import React from "react";
import styles from "../components/Header.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.marvelLogo} src="img/marvel-logo.jpg" />
        <div className={styles.favorites}>
          <img className={styles.heartIcon} src="img/heart-icon.png" />
          <p>3</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
