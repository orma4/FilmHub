import './FilmDetails.css';

export function FilmDetails({ film }) {
	if (!film) return 'no film selected..';

	const { title, opening_crawl } = film.properties;
	return (
		<div className='FilmDetails'>
			<h2 className='title'>{title}</h2>
			<p className='desc'>{opening_crawl}</p>
		</div>
	);
}
