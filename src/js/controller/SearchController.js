import { searchBar, searchSection, searchResults } from '../view/SearchView';
import { searchMovie, findMovie } from '../model/API';
//import { addMovie } from './favoriteController';
//import addMovie from './favoriteController';
import { addMovieToView } from '../view/favoriteView';

export default function setupSearch() {

    const SearchField = searchBar();
    document.body.insertAdjacentHTML('beforeend', SearchField);
    
    const SearchSection = searchSection();
    document.body.insertAdjacentHTML('beforeend', SearchSection);
}

export function searchInputCheck() {

    const input = document.getElementById('search_input');
    
    // Checks for 'Enter'.
    input.addEventListener('keydown', (event) => {
        if(event.keyCode === 13) {
          searchMovie(input.value)
          .then(reponse => {
              const searchSection = document.getElementById('searchSection');

              const searchResult = searchResults(reponse.Search);
 
              searchSection.innerHTML = searchResult;
          }) 
        }
    })
}

export function addMovieToFavorite() 
    {
      const searchSeection = document.getElementById('searchSection');

      searchSeection.addEventListener('click', (event) => {
        const clickedElement = event.target;

        if(clickedElement.matches('a.favorite-movie-button')) 
        {
          const movieID = clickedElement.getAttribute('data-id');
          findMovie(movieID)
          .then(reponse => {
              //addMovie(reponses.search)
              addMovieToView(reponse)
              //console.log(reponse);
            /*const erere = document.getElementById('favoriteSection')
            const searchResul = searchResults(reponses.Search);*/
          })
          //console.log(movieID);
        }
      })
    }