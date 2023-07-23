// Estarea los metodos para poder
/**
 * Obtener ==>GET
 * Crear ==> POST
 * Actualizar ==> PUT
 * Eliminar ==> DELETE
 */
import { urlMovies, mockAPIUrl } from "./config.js";

//ejemplo de desestructuracion con el data
//data = await response.json();
/* 
const data = {
  total: 100,
  entries: [],
};

const { total, entries } = data;
*/
export const getMovies = async () => {
  try {
    const response = await fetch(urlMovies); // retorna una promesa
    const {entries} = await response.json(); // con esto resuelvo la promesa
    //data tiene 2 keys
    // total = 100
    // entries = array o arreglo con las 100 peliculas

    return entries;
  } catch (error) {
    return error;
  }
};

/**
 * Esta funcion va a traer las peliculas de mockapi
 */
 export const getMoviesFromMockApi = async () => {
  try {
    const response = await fetch(mockAPIUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
/**
 * Esta funcion va a acrear una pelicula en mockapi
 * recordemos que como es para crear usaremos POST
 */
export const storeMovieMockApi = async (movie) => {
    try {
      // Este objeto sera el que enviemos a mockApi
      const object = {
        title: movie.title,
        programType: movie.programType,
        releaseYear: movie.releaseYear,
        imageUrl: movie.images.posterArt.url,
      };
  
      const response = await fetch(mockAPIUrl, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return response;
    } catch (error) {
      return error;
    }
  };
