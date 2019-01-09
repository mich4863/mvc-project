import { searchBar, searchSection } from '../view/SearchView'

export default function setupSearch() {
    const SearchField = searchBar();
    document.body.insertAdjacentHTML('beforeend', SearchField);
    
    const SearchSection = searchSection();
    document.body.insertAdjacentHTML('beforeend', SearchSection);
}