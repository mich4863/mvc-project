export default class Movie {

    constructor(movie) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.genre = movie.Genre;
        this.plot = movie.Plot;
        this.poster = movie.Poster;
        this.imdbID = movie.imdbID;
        this.type = movie.Type;  
    }
}