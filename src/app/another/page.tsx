"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Md5 } from "ts-md5";
import styles from "../../styles/page.module.scss";

const API_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

interface CharacterPageProps {
  character: {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      available: number;
    };
    series: {
      available: number;
    };
    stories: {
      available: number;
    };
  };
}

export default function CharacterPage() {
  const searchParams = useSearchParams(); // <-- Utiliza useSearchParams para obtener el parámetro ID
  const id = searchParams.get("id"); // <-- Obtener el valor del parámetro 'id'
  const [character, setCharacter] = useState<
    CharacterPageProps["character"] | null
  >(null);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const publicKey = API_KEY;
      const privateKey = PRIVATE_KEY;
      const ts = new Date().getTime();
      const hash = Md5.hashStr(`${ts}${privateKey}${publicKey}`);

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );
      const data = await response.json();
      setCharacter(data.data.results[0]);
    }

    fetchData();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className={styles.characterContainer}>
      <h1>{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <p>{character.description}</p>
      <p>Comics Available: {character.comics.available}</p>
      <p>Series Available: {character.series.available}</p>
      <p>Stories Available: {character.stories.available}</p>
    </div>
  );
}
