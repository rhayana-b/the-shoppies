import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const MovieResults = ({ searchResults, onNomination, nominationList }) => (
  <div className="flex flex-col items-center px-2 py-6 w-2/5 bg-gray-50 border rounded-md">
    <h2 className="mb-4 font-bold text-lg">Results for "searched movie"</h2>
    <ul>
      {searchResults.Search?.map((movie) => (
        <div
          className="border rounded flex justify-between items-center w-full my-2 h-14"
          key={movie.imdbID}
        >
          <li className="mx-2 pl-2 h-8 flex items-center">{`${movie.Title} (${movie.Year})`}</li>
          <button
            type="button"
            title="Nominate this movie"
            className="rounded-lg flex flex-col justify-center items-center p-1 mx-2 h-8 w-8 bg-purple-700 disabled:transparent hover:bg-purple-900"
            onClick={() => onNomination(movie)}
            disabled={nominationList.some(
              (item) => item.imdbID === movie.imdbID
            )}
          >
            <FontAwesomeIcon
              icon={faTrophy}
              className="mx-2"
              size="sm"
              color="#fff"
            />
          </button>
        </div>
      ))}
    </ul>
  </div>
);

export default MovieResults;
