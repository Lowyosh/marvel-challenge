import React from "react";
import styles from "./CharacterCard.module.scss";
import { useFavorites } from "../context/FavContext";
import Image from "next/image";
import Link from "next/link";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const image = character?.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "url-to-placeholder-image.png";

  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={character.name}
        className={styles.characterImage}
        loading="lazy"
      />
      <div className={styles.info}>
        <Link href={`/another`} className={styles.characterName}>
          {character.name}
        </Link>
        <div className={styles.favoritesInfo}>
          <div onClick={() => toggleFavorite(character)}>
            <Image
              className={styles.heartIcon}
              src={
                isFavorite ? "/img/heart-icon.png" : "/img/heart-icon-white.png"
              }
              alt="favorites"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
