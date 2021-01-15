import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MovieSearch = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = (event) => {
    onSearch(searchInput);
    event.preventDefault();
  };

  return (
    <div className="flex flex-col p-6 mb-10 w-4/5 bg-gray-50 border rounded-md">
      <label htmlFor="movie-search" className="font-bold mb-2">
        Movie Title
      </label>
      <form>
        <input
          className="bg-gray-50 border rounded-sm px-2"
          id="movie-search"
          name="movie-search"
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="button" onClick={onSubmit}>
          <FontAwesomeIcon icon={faSearch} className="mx-2" />
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
