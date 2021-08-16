import spinner from './assets/spinner.gif';
import './App.css';

import { useState, useEffect } from 'react';
import { Main } from './components/Main/Main';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { getFilms } from './api/swapi';
import { Favorites } from './components/Favorites/Favorites';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import * as storageApi from './api/storageApi';



function App() {
	const [films, setFilms] = useState([]);
	const [selectedFilmId, setSelectedFilmId] = useState('');
	const [page, setPage] = useState(0);	
	const [favorites, setFavorites] = useState(() => storageApi.get('favorites') || []);
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


	useEffect(() => {
		storageApi.save('favorites', favorites);
	}, [favorites]);
	
	const selectedFilm = films.find(film => film.uid === selectedFilmId);

	function onSelect(uid) {
			setSelectedFilmId(uid);
		}

	function toggleFavorite(uid) {
		const exists = favorites.find(fav => fav === uid);
		const newFavorites = exists ? favorites.filter(fav => fav !== uid) : [...favorites, uid];
		setFavorites(newFavorites);
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
			<Header setPage={setPage} />
			{page === 0 && (
				<Main>
					<Sidebar onSelect={onSelect} films={films} />
					<FilmDetails
						toggleFavorite={toggleFavorite}
						favorites={favorites}
						film={selectedFilm}
					/>
				</Main>
			)}
			{page === 1 && <Favorites films={films} favorites={favorites} />}
		</div>
	);
}

export default App;
