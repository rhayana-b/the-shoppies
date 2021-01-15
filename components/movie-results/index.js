import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MovieResults = ({ searchResults }) => {
  const [nominationList, setNominationList] = useState([]);
  console.log(nominationList);

  const handleNominations = (movie) => {
    setNominationList([...nominationList, `${movie.Title} (${movie.Year})`]);
  };

  return (
    <div className="flex flex-col items-center px-2 py-6 w-2/5 bg-gray-50 border rounded-md">
      <h2 className="mb-4 font-bold text-lg">Results for "searched movie"</h2>
      <ul>
        {searchResults.Search?.map((movie) => (
          <div className="flex justify-between w-full mb-2" key={movie.imdbID}>
            <li className="mb-2 mr-4">{`${movie.Title} (${movie.Year})`}</li>
            <button
              type="button"
              className="border rounded flex flex-col justify-center items-center p-2"
              onClick={() => handleNominations(movie)}
            >
              <FontAwesomeIcon
                icon={faTrophy}
                className="mx-2"
                color="#b67ff5"
              />
              Nominate
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;
