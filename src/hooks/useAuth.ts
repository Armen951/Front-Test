import { useAppSelector } from 'hooks/useAppSelector';
import { userSelector } from 'store/selectors/user';

const useAuth = () => {
	const { token } = useAppSelector(userSelector);

	return !!token;
};

export default useAuth;
