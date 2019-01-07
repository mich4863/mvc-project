import FavoriteController from './controller/favoriteController';
import {store} from './model/store';

export default class App {
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

        /*-- FAVORITE SECTION --*/
        new FavoriteController().setupView();

        /*-- ALL MOVIES SECTION --*/
        const allMoviesHTML = `
        <!-- All Movies -->
        <div class="container">
        <section class="col">
          <h2>All Movies</h2>
          <div class="row">

            <article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://m.media-amazon.com/images/M/MV5BMDM0YTM3Y2UtNzY5MC00OTc4LThhZTYtMmM0ZGZjMmU1ZjdmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">Brazil<i class="material-icons right">arrow_upward</i></span>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">Brazil<i class="material-icons right">close</i></span>
                  <p>A bureaucrat, in a retro-future world, tries to correct an administrative error, and becomes an enemy of the state.</p>
                </div>
              </div>
            </article>

            <article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://m.media-amazon.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">Trading Places<i class="material-icons right">arrow_upward</i></span>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">Trading Places<i class="material-icons right">close</i></span>
                  <p>A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.</p>
                </div>
              </div>
            </article>

            <article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">Groundhog Day<i class="material-icons right">arrow_upward</i></span>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">Groundhog Day<i class="material-icons right">close</i></span>
                  <p>A weatherman finds himself inexplicably living the same day over and over again.</p>
                </div>
              </div>
            </article>

            <article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">Pi<i class="material-icons right">arrow_upward</i></span>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">Pi<i class="material-icons right">close</i></span>
                  <p>A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.</p>
                </div>
              </div>
            </article>

            <article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">Reptilicus<i class="material-icons right">arrow_upward</i></span>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">Reptilicus<i class="material-icons right">close</i></span>
                  <p>After copper miners discover part of the frozen tail of a prehistoric monster in Lapland, scientists inadvertently bring it back to life.</p>
                </div>
              </div>
            </article>
        `
        document.body.insertAdjacentHTML('beforeend', allMoviesHTML);

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
/*-- Starts new app instance, when document is loaded. --*/
//document.addEventListener('DOMContentLoaded', (e) => new App());