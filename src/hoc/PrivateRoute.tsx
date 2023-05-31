import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { ROUTE_LOGIN } from 'constants/router';

const PrivateRoute: FC = () => {
	const auth = useAuth();

	return auth ? <Outlet /> : <Navigate to={ROUTE_LOGIN} />;
};

export default PrivateRoute;
