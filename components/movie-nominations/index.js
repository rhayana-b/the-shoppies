import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MovieNominations = ({ nominationList, onDelete }) => (
  <div className="flex flex-col items-center px-2 py-6 w-2/5 bg-gray-50 border rounded-md">
    <h2 className="mb-4 font-bold text-lg">Nominations</h2>
    <ul>
      {nominationList.map((movie) => (
        <div
          className="border rounded flex justify-between items-center w-full my-2 h-14"
          key={movie.imdbID}
        >
          <li className="mx-2 pl-2 h-8 flex items-center">{movie.Title}</li>
          <button
            type="button"
            title="Remove this movie from your list"
            className="rounded-lg flex flex-col justify-center items-center p-1 mx-2 h-8 w-8 bg-purple-700 disabled:transparent hover:bg-purple-900"
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
