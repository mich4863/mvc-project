import { secret } from '../secret';

const URI = 'http://www.omdbapi.com/',
      KEY = secret.Key;

export function searchMovie(movieTitle){
  try {
    const URL = URI
              + `?`
              + `s=${movieTitle}`
              + `&apikey=${KEY}`

     return fetch(URL)
      .then(response => response.json())
  } 
  catch (error) {
    console.error(error);
  }
}

export function findMovie(movieID){
    try {
      const URL = URI
                + `?`
                + `i=${movieID}`
                + `&apikey=${KEY}`
  
       return fetch(URL)
        .then(response => response.json())
    } 
    catch (error) {
      console.error(error);
    }
  }

