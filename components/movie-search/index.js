import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MovieSearch = () => (
  <div className="flex flex-col p-6 mb-10 w-4/5 bg-gray-50 border rounded-md">
    <label htmlFor="movie-search" className="font-bold mb-2">
      Movie Title
    </label>
    <div>
      <input
        className="bg-gray-50 border rounded-sm px-2"
        id="movie-search"
        name="movie-search"
        type="search"
        placeholder="Search..."
      />
      <FontAwesomeIcon icon={faSearch} className="mx-2" />
    </div>
  </div>
);

export default MovieSearch;
