import { getAccessToken } from 'services/token';
import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
instance.interceptors.request.use(
	config => {
		const token = getAccessToken();
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
export default instance;
