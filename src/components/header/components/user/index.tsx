import { FC, useEffect, useRef, useState } from 'react';
import Spinner from 'components/spinner';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import useOutsideClick from 'hooks/useOutsideClick';
import { userSelector } from 'store/selectors/user';
import { cleanArticlesSlice } from 'store/slices/articles/articlesSlice';
import { fetchUserThunk } from 'store/slices/user/thunk';
import { cleanUserSlice } from 'store/slices/user/userSlice';
import { removeAccessToken } from 'services/token';
import './User.scss';

const User: FC = () => {
	const dispatch = useAppDispatch();
	const { loading, error, user } = useAppSelector(userSelector);
	const refContainer = useRef(null);
	const [open, setOpen] = useState<boolean>(false);

	const handleToggleOpen = () => setOpen(prev => !prev);
	const handleClosePopUp = () => setOpen(false);
	const handleLogout = () => {
		removeAccessToken();
		dispatch(cleanUserSlice());
		dispatch(cleanArticlesSlice());
		handleClosePopUp();
	};

	useOutsideClick(refContainer, handleClosePopUp);

	useEffect(() => {
		dispatch(fetchUserThunk());
	}, []);

	return (
		<div ref={refContainer} className='user_container'>
			<div className='user' onClick={handleToggleOpen}>
				{!loading && !error && <p className='user_name'>{user?.name}</p>}
				{!loading && error && <p className='user_error'>Error</p>}
				{loading && <Spinner color='accent' />}
			</div>
			<div className={`user_logout ${open ? '' : 'user_logout_hidden'}`}>
				<p className='user_logout_text' onClick={handleLogout}>
					Log out
				</p>
			</div>
		</div>
	);
};

export default User;
