import MovieCardComponent from './movieCardComponent';
import {store} from '../model/store';

export default class FavoriteView 
{
    populateWithMovies() 
    {
        let movieString = '';
        console.log(store);
        store.forEach(movie => {
            movieString += new MovieCardComponent(movie).render()
        })
        return movieString
    }
}