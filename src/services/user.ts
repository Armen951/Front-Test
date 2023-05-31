import { GET_USER, LOGIN, REGISTER } from 'urls/user';
import AxiosInstance from 'lib/Instance';
import { LoginForm, SignUpForm } from 'types/auth';

export const login = (body: LoginForm) => AxiosInstance.post(LOGIN, body);
export const register = (body: SignUpForm) => AxiosInstance.post(REGISTER, body);
export const getUser = () => AxiosInstance(GET_USER);
