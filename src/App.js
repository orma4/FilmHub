import spinner from './assets/spinner.gif';
import './App.css';

import React, { useState, useEffect } from 'react';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { getFilms } from './api/swapi';
import { FilmDetails } from './components/FilmDetails/FilmDetails';



function App() {
  const [films, setFilms] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		setLoading(true);
		getFilms().then(data => {
			if (data.error) {
				setError(data.error);
			} else {
				setFilms(data);
			}
			setLoading(false);
		});
	}, []);

	const selectedFilm = films.find(film => film.uid === selectedFilmId);

  function onSelect(uid) {
		setSelectedFilmId(uid);
	}



	if (loading) {
		return( <div> 
               <img src={spinner} className="centered" alt="spinner"/>
            </div>)
	}
	if (error) {
		return `error: '${error}`
	}

  return (
    <div className='App'>
    <Header />
      <Main>
         <Sidebar onSelect={onSelect} films={films} />
         <FilmDetails
						film={selectedFilm}
					/>
      </Main>
  </div>
  );
}

export default App;
