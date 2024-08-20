import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { fetchCharacterById } from "../../utils/api";
import { Context } from "vm";
import styles from "../styles/page.module.scss";

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

const CharacterPage: React.FC<CharacterPageProps> = ({ character }) => {
  const router = useRouter();
  console.log(router.query);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className={styles.characterPage}>
      <h1>{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className={styles.characterImage}
      />
      <p>{character.description || "No description available."}</p>
      <p>Comics: {character.comics.available}</p>
      <p>Series: {character.series.available}</p>
      <p>Stories: {character.stories.available}</p>
    </div>
  );
};

export async function getServerSideProps({ query: { id } }: Context) {
  console.log(id);

  fetchCharacterById(id);

  if (!id) {
    console.log(`${id} + primer paso de getserverprops`);
    return { notFound: true }; // Redirige a 404 si el id no se encuentra
  }

  try {
    const character = await fetchCharacterById(id);
    if (!character) {
      console.log(`${id} + segundo paso de getserverprops`);
      return { notFound: true }; // Redirige a 404 si el personaje no se encuentra
    }

    return {
      props: {
        character,
        characterId: id,
      },
    };
  } catch (error) {
    console.error("Error fetching character:", error);
    console.log(`${id} + tercer paso de getserverprops`);
    return { notFound: true }; // Maneja cualquier error devolviendo un 404
  }
}

export default CharacterPage;
