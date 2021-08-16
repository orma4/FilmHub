import './Sidebar.css';
export function Sidebar({ films = [], onSelect }) {
	return (
		<div className='Sidebar'>
			{films.map(film => {
				return (
					<div key={film.uid} className='item' onClick={() => onSelect(film.uid)}>
						{film.properties.title}
					</div>
				);
			})}
		</div>
	);
}
