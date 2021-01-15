import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const MovieNominations = ({ nominationList, onDelete }) => (
  <div className="flex flex-col items-center px-5 py-6 w-2/5 bg-gray-50 border rounded-md">
    <h2 className="mb-4 font-bold text-lg">Nominations</h2>
    <div className="flex">
      <ul>
        {nominationList.map((movie) => (
          <div className="flex justify-between w-full mb-2" key={movie}>
            <li className="mb-2 mr-4">{movie}</li>
            <button
              type="button"
              className="border rounded flex flex-col justify-center items-center p-2"
              onClick={() => onDelete(movie)}
            >
              <FontAwesomeIcon
                icon={faMinusSquare}
                className="mx-2"
                color="#b67ff5"
              />
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieNominations;
