import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Articles from 'pages/articles';
import Login from 'pages/auth/login';
import SignUp from 'pages/auth/signUp';
import NewsFeed from 'pages/newsFeed';
import AuthLayout from 'layouts/authLayout';
import RootLayout from 'layouts/rootLayout';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
import { ROUTE_ARTICLES, ROUTE_NEWS_FEED } from 'constants/router';

const Routers: FC = () => (
	<Routes>
		<Route path={ROUTE_NEWS_FEED} element={<RootLayout />}>
			<Route path={ROUTE_NEWS_FEED} element={<PrivateRoute />}>
				<Route path={ROUTE_NEWS_FEED} element={<NewsFeed />} />
				<Route path={ROUTE_ARTICLES} element={<Articles />} />
			</Route>
		</Route>
		<Route path='auth/' element={<PublicRoute />}>
			<Route path='/auth/' element={<AuthLayout />}>
				<Route path='login' element={<Login />} />
				<Route path='sign-up' element={<SignUp />} />
			</Route>
		</Route>
		<Route path='*' element={<Navigate to='/' />} />
	</Routes>
);

export default Routers;
