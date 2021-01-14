const MovieResults = () => (
  <div className="flex flex-col items-center px-5 py-6 w-2/5 bg-gray-50 border rounded-md">
    <h2 className="mb-4 font-bold text-lg">Results for "searched movie"</h2>
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
);

export default MovieResults;
