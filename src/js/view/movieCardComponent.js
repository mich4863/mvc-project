export default class MovieCardComponent {

  render(movie) {
    return `<article class="col s12 m5 l3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${movie.poster}">
                </div>
                <div class="card-content">
                  <span class="card-title activator white-text text-darken-4">${movie.title}<i class="material-icons right">arrow_upward</i></span>
                  <p>Year: ${movie.year}<br>Genre: ${movie.genre}</p>
                  <p><a href="#">Add to Favorites</a></p>
                </div>
                <div class="card-reveal black">
                  <span class="card-title white-text text-darken-4">${movie.title}<i class="material-icons right">close</i></span>
                  <p>${movie.plot}</p>
                </div>
              </div>
            </article>`
  }
}