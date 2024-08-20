import { Md5 } from "ts-md5";

// Constantes de configuración
const API_KEY = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

// Función para obtener los primeros 50 personajes al cargar la página
export const fetchInitialCharacters = async () => {
  const publicKey = API_KEY;
  const privateKey = PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = new Md5().appendStr(`${ts}${privateKey}${publicKey}`).end();

  const BASE_URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`;

  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error fetching initial characters:", error);
    return null; // devuelve null en caso de error
  }
};

// Buscar personajes por nombre (query)
export const fetchCharacters = async (query: string) => {
  if (!query) return []; // No hacer la llamada si no hay query

  const publicKey = API_KEY;
  const privateKey = PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = new Md5().appendStr(`${ts}${privateKey}${publicKey}`).end();

  const BASE_URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const url = `${BASE_URL}&nameStartsWith=${query}&limit=50`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return null; // devuelve null para manejar errores
  }
};

// Función para obtener un personaje por su ID
export const fetchCharacterById = async (id: number | number[]) => {
  const publicKey = API_KEY;
  const privateKey = PRIVATE_KEY;
  const ts = new Date().getTime();
  const hash = new Md5().appendStr(`${ts}${privateKey}${publicKey}`).end();

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );

  if (!response.ok) {
    console.error(`La API respondió con el estado: ${response.status}`);
    return null;
  }

  const data = await response.json();
  console.log("Fetching character with ID:", id);

  return data.data.results[0];
};
