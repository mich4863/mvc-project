export default class Movie {

    constructor(movie) {
        this.title = movie.title || movie.Title;
        this.year = movie.year || movie.Year;
        this.genre = movie.genre || movie.Genre;
        this.plot = movie.plot || movie.Plot;
        this.poster = movie.poster || movie.Poster;
        this.id = movie.id || movie.imdbID;  
    }
}