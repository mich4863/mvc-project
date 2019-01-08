import { store } from '../model/store';
import FavoriteView from '../view/favoriteView';

    export default function setupFavoriteView() 
    {
      const favoriteHTML = FavoriteView(store);
      document.body.insertAdjacentHTML('beforeend', favoriteHTML);
     
      /*const favoriteSection = document.getElementById('favoriteSection');

      favoriteSection.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if(clickedElement.matches('a.favorite-movie-button')) 
        {
          console.log(clickedElement.dataset);

          const movieID = clickedElement.getAttribute('data-id');
          clickedElement.closest('article').remove();
          console.log(`Removed movie with imdbID ${movieID} from favorite section`)
        }
      })*/
    }        