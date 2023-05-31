import { getAccessToken } from 'services/token';
import axios from 'axios';
const baseUrl = 'http://localhost:8000/api/';
const instance = axios.create({
	baseURL: baseUrl,
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
