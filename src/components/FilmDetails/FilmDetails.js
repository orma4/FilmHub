import './FilmDetails.css';

export function FilmDetails({ film, toggleFavorite, favorites }) {
	if (!film) return 'no film selected..';
	const isFavorite = !!favorites.find(fav => fav === film.uid);

	const { title, opening_crawl } = film.properties;
	return (
		<div className='FilmDetails'>
			<h2 className='title'>{title}</h2>
			<p className='desc'>{opening_crawl}</p>
			<button onClick={() => toggleFavorite(film.uid)}>
				{isFavorite ? 'Remove from favorite' : 'Add to favorite'}
			</button>
		</div>
	);
}
