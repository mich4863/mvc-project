import { store } from '../model/store';
import  FavoriteView, { addMovieToView } from '../view/favoriteView';

    export default function setupFavoriteView() 
    {
      const favoriteHTML = FavoriteView(store);
      document.body.insertAdjacentHTML('beforeend', favoriteHTML);
    }
    
    export function removeMovie() 
    {
      const favoriteSection = document.getElementById('favoriteSection');

      favoriteSection.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if(clickedElement.matches('a.favorite-movie-button')) 
        {
          const movieID = clickedElement.getAttribute('data-id');
          clickedElement.closest('article').remove();
          store.removeFromLocalStore(movieID);
        }
      })
    }

    /*export function addMovie(movie) {
      const favoriteSection = document.getElementById('favoriteSection');
      const movieCardHTML = addMovieToView(movie);

      favoriteSection.insertAdjacentHTML('beforeend', movieCardHTML);

      store.addToStore();
    }*/