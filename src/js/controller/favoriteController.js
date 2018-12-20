import FavoriteView from '../view/favoriteView';

export default class FavoriteController {

    setupView() {
      let HTMLelement = document.getElementById('favoriteSection');
      let movieCardHTML = new FavoriteView().populateWithMovies();
      
      HTMLelement.insertAdjacentHTML('beforeend', movieCardHTML);
    }  

      /*for(let i = 0; i < testMovies.length; i++)
      {
        let favMovie = new Movie(testMovies[i]);

        if(favMovie.type === "fav")
        {
          let favMovieCard = new MovieCardComponent(favMovie);
          document.getElementById('favMovies').insertAdjacentHTML('beforeend', favMovieCard.render(favMovie));  
        }
      }*/        
}