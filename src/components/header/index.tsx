import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import User from './components/user';
import { ROUTE_ARTICLES, ROUTE_NEWS_FEED } from 'constants/router';
import './Header.scss';

const Header: FC = () => {
	return (
		<header className='header'>
			<nav>
				<NavLink
					to={ROUTE_NEWS_FEED}
					className={({ isActive }) => `header_link ${isActive ? 'header_active_link' : ''}`}
				>
					News Feed
				</NavLink>
				<NavLink
					to={ROUTE_ARTICLES}
					className={({ isActive }) => `header_link ${isActive ? 'header_active_link' : ''}`}
				>
					Articles
				</NavLink>
			</nav>
			<User />
		</header>
	);
};

export default Header;
