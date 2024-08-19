"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface FavoritesContextProps {
  favorites: any[];
  toggleFavorite: (character: any) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites debe ser usado dentro de FavoritesProvider");
  }
  return context;
};

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, []);

  const toggleFavorite = (character: any) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.some((fav) => fav.id === character.id)) {
        updatedFavorites = prevFavorites.filter(
          (fav) => fav.id !== character.id
        );
      } else {
        updatedFavorites = [...prevFavorites, character];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, useFavorites };
