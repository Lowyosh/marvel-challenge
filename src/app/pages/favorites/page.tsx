"use client";
import React from "react";
import { useFavorites } from "../../../context/FavContext";
import CharacterCard from "../../../components/CharacterCard";
import styles from "../../styles/page.module.scss";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  if (!favorites || favorites.length === 0) {
    return (
      <>
        <Header></Header>

        <h5 className={styles.favTitle}>FAVORITES</h5>
        <SearchBar onSearch={function (query: string): void {}}></SearchBar>
        <p className={styles.favText}>There are no favorite characters</p>
      </>
    );
  }

  return (
    <div className="favorites-page">
      <Header></Header>
      <h5 className={styles.favTitle}>FAVORITES</h5>
      <SearchBar onSearch={function (query: string): void {}}></SearchBar>
      <p className={styles.results}>{favorites.length} RESULTS</p>
      <div className={styles.cardsContainer}>
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
