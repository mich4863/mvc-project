import Movie from './movie'

class Store 
{
  movieDB = {}

    constructor()
    {
      if(!localStorage.getItem('movieDB')) 
      {
        this.createTestData();
      }
      else
      {
        this.loadFromLocalStore();
      }
    }

    addToStore(movie) 
    {
      this.movieDB[movie.imdbID] = movie;
      this.saveToLocalStore();
    }

    loadFromLocalStore() 
    {
      this.movieDB = JSON.parse(localStorage['movieDB']);
    }

    saveToLocalStore() 
    {
      localStorage.setItem('movieDB', JSON.stringify(this.movieDB))
    }

    removeFromLocalStore(movieId) 
    {
      delete this.movieDB[movieId];
      this.saveToLocalStore();
    }

    createTestData() 
    {
        const testData = {
          tt0083658 : {
            Title: "Blade Runner",
            Year: 1982,
            Genre: "Sci-Fi, Thriller",
            Plot: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0083658",
            Type: "movie"
          },
          tt0088846 : {
            Title:"Brazil",
            Year: 1985,
            Genre:"Drama, Sci-Fi",
            Plot:"A bureaucrat, in a retro-future world, tries to correct an administrative error and becomes an enemy of the state.",
            Poster:"https://m.media-amazon.com/images/M/MV5BMDM0YTM3Y2UtNzY5MC00OTc4LThhZTYtMmM0ZGZjMmU1ZjdmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            imdbID:"tt0088846",
            Type: "movie"
          },
          tt0107048 : {
            Title:"Groundhog Day",
            Year: 1993,
            Genre:"Comedy, Fantasy, Romance",
            Plot:"A weatherman finds himself inexplicably living the same day over and over again.",
            Poster:"https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID:"tt0107048",
            Type: "movie"
          }
        }
        
        const keys = Object.keys(testData);

        keys.forEach(key => {
          const movie = testData[key];
          this.movieDB[key] = new Movie(movie);    
        });
        this.saveToLocalStore();
    }
}

export let store = new Store();