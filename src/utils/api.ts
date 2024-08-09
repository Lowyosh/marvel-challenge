import { Md5 } from "ts-md5";

const BASE_URL = "https://gateway.marvel.com/v1/";
const API_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

export const fetchCharacters = async () => {
  const publicKey = API_KEY;
  const privateKey = PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = new Md5().appendStr(`${ts}${privateKey}${publicKey}`).end();

  try {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`
    );

    if (!response.ok) {
      throw new Error(
        `Error Status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.data.results;
  } catch (error: any) {
    console.error("Error fetching characters:", error);
    throw new Error(`Failed to fetch characters: ${error.message}`);
  }
};
