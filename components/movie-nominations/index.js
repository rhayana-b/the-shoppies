import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const MovieNominations = ({ nominationList, onDelete }) =>
  nominationList.length > 0 && (
    <div className="flex flex-col items-center my-2 px-2 py-6 lg:w-2/4 lg:ml-8 bg-gray-50 border rounded-md">
      <h2 className="mb-4 font-bold text-lg text-gray-900 uppercase">
        Nominations
      </h2>
      <ul className="w-full px-4">
        {nominationList.map((movie) => (
          <div
            className="border rounded flex justify-between items-center w-full my-2 h-14"
            key={movie.imdbID}
          >
            <li className="mx-2 pl-2 h-8 flex items-center">{`${movie.Title} (${movie.Year})`}</li>
            <button
              type="button"
              title="Remove this movie from your list"
              className="rounded-lg flex flex-col justify-center items-center p-1 mx-2 h-8 w-8 bg-purple-700 hover:bg-purple-900 transform hover:scale-110 motion-reduce:transform-none"
              onClick={() => onDelete(movie)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="sm"
                className="mx-2"
                color="#fff"
              />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );

export default MovieNominations;
