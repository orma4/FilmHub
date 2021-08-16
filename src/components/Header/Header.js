import './Header.css';

export function Header({ setPage }) {
	return (
		<div className='Header'>
			<span className='nav-item' onClick={() => setPage(0)}>
				home
			</span>
			<span className='nav-item' onClick={() => setPage(1)}>
				favorites
			</span>
		</div>
	);
}
