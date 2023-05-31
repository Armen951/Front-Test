import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.scss';

const AuthLayout: FC = () => {
	return (
		<main className='authLayout'>
			<Outlet />
		</main>
	);
};

export default AuthLayout;
