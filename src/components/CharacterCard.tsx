import React from "react";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  name: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={name}
        className={styles.characterImage}
        loading="lazy"
      />
      <div className={styles.info}>
        <p className={styles.characterName}>{name}</p>
        <div className={styles.favoritesInfo}>
          <img className={styles.heartIcon} src="img/heart-icon.png" />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
