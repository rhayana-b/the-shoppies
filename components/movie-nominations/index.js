const MovieNominations = () => (
  <div className="flex flex-col items-center px-5 py-6 w-2/5 bg-gray-50 border rounded-md">
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
);

export default MovieNominations;
