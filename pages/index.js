import { useEffect, useState } from 'react';
import Modal from '../components/modal';
import MovieNominations from '../components/movie-nominations';
import MovieResults from '../components/movie-results';
import MovieSearch from '../components/movie-search';
import api from '../services/api';

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchedFor, setSearchedFor] = useState('');

  useEffect(() => {
    if (nominationList.length === 5) {
      setShowModal(true);
    }
  }, [nominationList.length]);

  const getResults = (searchInput) => {
    setSearchedFor(searchInput);
    const fetchURL = `?apikey=${
      process.env.NEXT_PUBLIC_OMDB_KEY
    }&type=movie&s=${searchInput.replace(' ', '+')}`;
    api.get(fetchURL).then((res) => {
      setSearchResults(res.data);
    });
  };

  const getNominations = (movie) => {
    if (nominationList.length < 5) {
      setNominationList([...nominationList, movie]);
    } else {
      setShowModal(true);
    }
  };

  const handleDelete = (movie) => {
    setNominationList(
      nominationList.filter((item) => item.imdbID !== movie.imdbID)
    );
  };

  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="flex flex-col bg-purple-50 w-full h-full">
        <div className="flex flex-col h-full mx-4 md:mx-28 my-10">
          <div className="flex justify-center py-2 mb-10">
            <h1 className="text-4xl font-bold text-gray-900">The Shoppies</h1>
          </div>
          <div className="flex flex-col items-center">
            <MovieSearch onSearch={getResults} />
          </div>
          <div
            className={
              nominationList.length > 0
                ? ' flex flex-col lg:flex-row justify-center py-4 mb-10 w-full'
                : 'flex flex-col lg:flex-row justify-between py-4 mb-10 w-full'
            }
          >
            <MovieResults
              searchResults={searchResults}
              onNomination={getNominations}
              nominationList={nominationList}
              searchedFor={searchedFor}
            />
            <MovieNominations
              nominationList={nominationList}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        alertMessage="You have nominated 5 movies. If you wish to change your list for nominations, you can remove movies from the list to add others from your search. Thank you :)"
      />
    </div>
  );
}
