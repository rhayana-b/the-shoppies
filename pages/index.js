import MovieNominations from '../components/movie-nominations';
import MovieResults from '../components/movie-results';
import MovieSearch from '../components/movie-search';

export default function Home() {
  return (
    <div className="bg-purple-50 h-screen w-full flex flex-col py-10 px-60">
      <div className="flex flex-col">
        <div className="flex justify-center w-full py-4 mb-20">
          <h1 className="text-4xl font-bold">The Shoppies</h1>
        </div>
        <div className="flex flex-col items-center">
          <MovieSearch />
        </div>
        <div className="flex justify-evenly p-4 mb-10">
          <MovieResults />
          <MovieNominations />
        </div>
      </div>
    </div>
  );
}
