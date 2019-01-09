import { searchBar, searchSection } from '../view/SearchView'

export default function setupSearch() {
    const SearchBar = searchBar();
    document.body.insertAdjacentHTML('beforeend', SearchBar);
    
    const SearchSection = searchSection();
    document.body.insertAdjacentHTML('beforeend', SearchSection);
}