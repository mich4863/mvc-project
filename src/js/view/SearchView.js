import MovieCardComponent from './movieCardComponent';

export function searchBar() {
    return `
      <section class="container">
        <div class="row">
          <div class="col s12">
            <div class="input-field col s6">
            <i class="material-icons prefix">search_circle</i>
            <input id="search_input" type="text">
            <label for="search_input">Search for a movie...</label>
            </div>
          </div>
        </div>
      </section>
    `
}

export function searchSection() {
    return `
      <section class="container">
        <div id="searchSection" class="row">
        
        </div>
      </section>
    `
}

export function searchResults(results) {
    let movieString = '';

    results.forEach(movie => {
        movieString += new MovieCardComponent(movie).render();
    });
    return movieString;
}