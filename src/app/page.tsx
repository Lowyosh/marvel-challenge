"use client";

import { useEffect, useState } from "react";
import styles from "../styles/page.module.scss";
import CharacterCard from "../components/CharacterCard";
import Header from "@/components/Header";
import { fetchCharacters } from "../utils/api";
import "normalize.css";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        console.log(data);
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacters();
  }, []);

  return (
    <main>
      <Header></Header>

      <div className={styles.cardsContainer}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          />
        ))}
      </div>
    </main>
  );
}
