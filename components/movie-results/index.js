import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const MovieResults = ({ searchResults, onNomination, nominationList }) => (
  <div className="flex flex-col items-center px-2 py-6 w-2/5 bg-gray-50 border rounded-md">
    <h2 className="mb-4 font-bold text-lg">Results for "searched movie"</h2>
    <ul>
      {searchResults.Search?.map((movie) => {
        const alreadyNominated = nominationList.some(
          (item) => item.imdbID === movie.imdbID
        );
        return (
          <div
            className="border rounded flex justify-between items-center w-full my-2 h-14"
            key={movie.imdbID}
          >
            <li className="mx-2 pl-2 h-8 flex items-center">{`${movie.Title} (${movie.Year})`}</li>
            <button
              type="button"
              title={
                !alreadyNominated
                  ? 'Nominate this movie'
                  : 'Movie already on the list'
              }
              className={
                !alreadyNominated
                  ? 'rounded-lg flex flex-col justify-center items-center p-1 mx-2 h-8 w-8 bg-purple-700 hover:bg-purple-900 transform hover:scale-110 motion-reduce:transform-none'
                  : 'rounded-lg flex flex-col justify-center items-center p-1 mx-2 h-8 w-8 bg-gray-200 cursor-not-allowed'
              }
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
        );
      })}
    </ul>
  </div>
);

export default MovieResults;
