"use client";

import { useEffect, useState } from "react";
import styles from "../styles/page.module.scss";
import CharacterCard from "../components/CharacterCard";
import Header from "@/components/Header";
import { fetchInitialCharacters, fetchCharacters } from "../utils/api";
import "normalize.css";
import SearchBar from "@/components/SearchBar";

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
  const [searching, setSearching] = useState(false);
  const [resultCount, setResultCount] = useState(0);

  const handleSearch = async (query: string) => {
    if (query.length >= 3) {
      try {
        const results = await fetchCharacters(query);
        setCharacters(results || []);
        setResultCount(results ? results.length : 0);
      } catch (error) {
        console.error("Error during search:", error);
      }
    } else if (query.length === 0) {
      setSearching(false);
      setResultCount(0);
    }
  };

  useEffect(() => {
    const loadInitialCharacters = async () => {
      try {
        const characters = await fetchInitialCharacters();
        const filteredCharacters = characters.map(
          (character: { id: number; name: any; thumbnail: any }) => ({
            id: character.id,
            name: character.name,
            thumbnail: character.thumbnail,
          })
        );
        setCharacters(filteredCharacters);
      } catch (error) {
        console.error("Error fetching initial characters:", error);
      }
    };

    loadInitialCharacters();
  }, []);

  return (
    <main>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <p className={styles.results}>{resultCount} RESULTS</p>
      <div className={styles.cardsContainer}>
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
