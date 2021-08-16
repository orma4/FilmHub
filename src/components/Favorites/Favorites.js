import './Favorites.css';

export function Favorites({ films, favorites }) {
	const selectedFilms = films.filter(film => favorites.includes(film.uid));
	console.log('selectedFilms', selectedFilms);

	if (!selectedFilms.length) {
		// is empty
	}
   
	return (
		<div className='Favorites'>
			{selectedFilms.map(film => {
				const { title, opening_crawl } = film.properties;
				return (
					<div className='card'>
						<h2 className='title'>{title}</h2>
						<p className='desc'>{opening_crawl}</p>
					</div>
				);
			})}
		</div>
	);
}
