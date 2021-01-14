import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="bg-purple-50 h-screen w-full flex flex-col py-10 px-60">
      <div className="flex flex-col">
        <div className="flex justify-center w-full py-4 mb-20">
          <h1 className="text-4xl font-bold">The Shoppies</h1>
        </div>
        <div className="flex flex-col items-center">
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
        </div>
        <div className="flex justify-evenly p-4 mb-10">
          <div className="flex flex-col items-center px-5 py-6 rounded-md w-2/5 bg-gray-50 border rounded-md">
            <h2 className="mb-4 font-bold text-lg">
              Results for "searched movie"
            </h2>
            <ul>
              <div className="flex">
                <li>movie 1</li>
                <button type="button" className="mx-2" disabled>
                  nominate
                </button>
              </div>
              <div className="flex">
                <li>movie 2</li>
                <button type="button" className="mx-2">
                  nominate
                </button>
              </div>
              <div className="flex">
                <li>movie 3</li>
                <button type="button" className="mx-2">
                  nominate
                </button>
              </div>
            </ul>
          </div>
          <div className="flex flex-col items-center px-5 py-6 rounded-md w-2/5 bg-gray-50 border rounded-md">
            <h2 className="mb-4 font-bold text-lg">Nominations</h2>
            <ul>
              <div className="flex">
                <li>nomination 1</li>
                <button type="button" className="mx-2">
                  remove
                </button>
              </div>
              <li>nomination 2</li>
              <li>nomination 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
