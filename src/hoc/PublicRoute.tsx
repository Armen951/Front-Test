import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { ROUTE_NEWS_FEED } from 'constants/router';

const PublicRoute: FC = () => {
	const auth = useAuth();

	return auth ? <Navigate to={ROUTE_NEWS_FEED} /> : <Outlet />;
};

export default PublicRoute;
