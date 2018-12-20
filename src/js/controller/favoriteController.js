import FavoriteView from '../view/favoriteView';

export default class FavoriteController {

    /*setupView() {
      let HTMLelement = document.getElementById('favoriteSection');
      let movieCardHTML = new FavoriteView().populateWithMovies();
      
      HTMLelement.insertAdjacentHTML('beforeend', movieCardHTML);
    }*/
    
    setupView() {
      let movieCardHTML = new FavoriteView().populateWithMovies();

      const favoriteHTML = `
        <!-- Favorite Movies -->
        <div class="container">
          <h2>Favorite Movies</h2>
        </div>

        <main>       
          <section class="col">  
            <div class="grey darken-4" id="sec">
              <div class="container">
                <div class="row" id="favoriteSection">
                  ${movieCardHTML}
                </div>
              </div>
            </div>
          </section>
      `
      document.body.insertAdjacentHTML('beforeend', favoriteHTML);
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