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

  useEffect(() => {
    if (nominationList.length === 5) {
      setShowModal(true);
    }
  }, [nominationList.length]);

  const getResults = (searchInput) => {
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
    <div className="bg-purple-50 h-full w-full flex flex-col py-10 px-10">
      <div className="flex flex-col w-">
        <div className="flex justify-center w-full py-2 mb-10">
          <h1 className="text-4xl font-bold">The Shoppies</h1>
        </div>
        <div className="flex flex-col items-center">
          <MovieSearch onSearch={getResults} />
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            alertMessage="You have nominated 5 movies already. If you wish to change your list for nominations, you can remove movies from the nomination list to add others from your search. Thank you :)"
          />
        </div>
        <div className="flex justify-evenly p-4 mb-10">
          <MovieResults
            searchResults={searchResults}
            onNomination={getNominations}
            nominationList={nominationList}
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
