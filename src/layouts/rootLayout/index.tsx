import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header';
import './RootLayout.scss';

const RootLayout: FC = () => {
	return (
		<div className='rootLayout container'>
			<Header />
			<main className='rootLayout_wrapper'>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
