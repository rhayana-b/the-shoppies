import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MovieSearch = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
    e.preventDefault();
  };

  return (
    <div className="flex flex-col p-6 mb-10 bg-gray-50 border rounded-md">
      <label htmlFor="movie-search" className="font-bold mb-2">
        Movie Title
      </label>
      <form>
        <FontAwesomeIcon icon={faSearch} className="mx-2" />
        <input
          className="bg-gray-50 border rounded-sm px-2 focus:ring-1 focus:ring-purple-300"
          id="movie-search"
          name="movie-search"
          type="search"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => handleSearch(e)}
        />
      </form>
    </div>
  );
};

export default MovieSearch;
