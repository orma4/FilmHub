import spinner from './assets/spinner.gif';
import './App.css';
import { useState, useEffect } from "react";
import { Main, Sidebar, Header, FilmDetails, Favorites } from "./components";
import { getFilms } from "./api/swapi";
import * as storageApi from './api/storageApi';

interface FilmProperties {
	title: string;
	opening_crawl: string;
  }
  
export interface IFilm {
	description: string;
	uid: string;
	properties: FilmProperties;
	_id: string;
  }

  
  const App = () => {
	const [page, setPage] = useState<number>(0);
	const [films, setFilms] = useState<IFilm[]>([]);
	const [favorites, setFavorites] = useState(
	  () => storageApi.get("favorites") || []
	);
	
	const [selectedFilmId, setSelectedFilmId] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
  
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
	
	const selectedFilm = films.find((film: IFilm) => film.uid === selectedFilmId);

	function handleSelect(uid: string) {
		setSelectedFilmId(uid);
	  }

	function toggleFavorite(uid: string) {
		const exists = favorites.find((fav: string) => fav === uid);
		const newFavorites = exists
		  ? favorites.filter((fav: string) => fav !== uid)
		  : [...favorites, uid];
		setFavorites(newFavorites);
	}

	if (loading) {
		return( <div><img src={spinner} className="centered" alt="spinner"/></div>)
	}

	if (error) {
		return <div className="error">{error}</div>;
	  }

	  return (
		<div className="app-container">
		  <Header setPage={setPage} />
	
		  {page === 0 && (
			<Main>
			  <Sidebar handleSelect={handleSelect} films={films} />
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
