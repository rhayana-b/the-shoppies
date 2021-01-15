import { useState } from 'react';
import MovieNominations from '../components/movie-nominations';
import MovieResults from '../components/movie-results';
import MovieSearch from '../components/movie-search';
import api from '../services/api';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [nominationList, setNominationList] = useState([]);

  const getResults = (searchInput) => {
    api
      .get(
        `?apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}&s=${searchInput.replace(
          ' ',
          '+'
        )}`
      )
      .then((res) => {
        setSearchResults(res.data);
      });
  };

  const getNominations = (movie) => {
    setNominationList([...nominationList, `${movie.Title} (${movie.Year})`]);
  };

  const handleDelete = (movie) => {
    setNominationList(nominationList.filter((item) => item !== movie));
  };

  return (
    <div className="bg-purple-50 h-full w-full flex flex-col py-10 px-10">
      <div className="flex flex-col">
        <div className="flex justify-center w-full py-4 mb-20">
          <h1 className="text-4xl font-bold">The Shoppies</h1>
        </div>
        <div className="flex flex-col items-center">
          <MovieSearch onSearch={getResults} />
        </div>
        <div className="flex justify-evenly p-4 mb-10">
          <MovieResults
            searchResults={searchResults}
            onNomination={getNominations}
          />
          <MovieNominations
            nominationList={nominationList}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
