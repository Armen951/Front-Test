import { InitialState } from 'store/types/user';
import { getAccessToken } from 'services/token';

const initialState: InitialState = {
	token: getAccessToken() || '',
	user: {},
	loading: false,
	error: '',
};

export default initialState;
