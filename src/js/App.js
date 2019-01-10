import setupFavoriteView, { removeMovie } from './controller/favoriteController';
import setupSearch, { searchInputCheck, addMovieToFavorite } from './controller/SearchController';

class App {
    constructor() {

        /*-- HEADER --*/
        const headerHTML = `
          <!-- Header -->
          <div class="container">
            <header>
              <h1>Personal Movie DB</h1>     
            </header>  
          </div>
        `
        document.body.insertAdjacentHTML('beforeend', headerHTML);

        /*-- SEARCH SECTION --*/ 
        setupSearch();
        searchInputCheck();
        addMovieToFavorite();

        /*-- FAVORITE SECTION --*/
        setupFavoriteView();
        removeMovie();

        /*-- FOOTER --*/
        const footerHTML = `
                </div>
              </section>
            </main>

            <!-- Footer -->
            <footer>
              <p class="center-align">Personal Movie DB - c 2018 ligebanan</p>
            </footer>
          </div>
        `
        document.body.insertAdjacentHTML('beforeend', footerHTML);

        /*-- Saves to localStorage, when the window is unloaded. --*/
        window.addEventListener('beforeunload', (e) => store.saveToLocalStore());
    }
}

/*-- Start app, when content is loaded --*/
document.addEventListener('DOMContentLoaded', () => new App());