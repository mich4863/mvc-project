import 'materialize-css'
import './scss/styles.scss'
// import babel-polyfill for async function declearation and await operator
import 'babel-polyfill'
// Import JS files

/*---- Load favorite movies ----*/
import FavoriteController from './js/controller/favoriteController.js';
new FavoriteController().setupView();

import FavoriteView from './js/view/favoriteView.js';

new FavoriteView().populateWithMovies();










