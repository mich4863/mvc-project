import Movie from '../model/movie'

export default class MovieCardComponent {

  constructor(movie) {
    this.movie = new Movie(movie);
  }

  render() {
    return `<article class="col s12 m5 l3">
              <div class="card hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${this.movie.poster}">
                </div>
                <div class="card-content">         
                  <span class="card-title activator white-text text-darken-4"><i class="material-icons right">arrow_upward</i>${this.movie.title}</span>
                  <p>Year: ${this.movie.year}<br>Genre: ${this.movie.genre}</p>
                  <p><a type="button" class="favorite-movie-button bottom" data-id="${this.movie.id}">Remove Favorite</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">${this.movie.title}<i class="material-icons right">close</i></span>
                  <p>${this.movie.plot}</p>
                </div>
              </div>
            </article>`
  } 
}
