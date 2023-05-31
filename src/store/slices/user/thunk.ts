import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthThunkReturn, User } from 'store/types/user';
import { setAccessToken } from 'services/token';
import { getUser, login, register } from 'services/user';
import { LoginForm, SignUpForm } from 'types/auth';

export const loginThunk = createAsyncThunk<AuthThunkReturn, LoginForm, { rejectValue: string }>(
	'login',
	async (data, { rejectWithValue }) => {
		return login(data)
			.then(({ data }) => {
				setAccessToken(data.data.token);
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const registerThunk = createAsyncThunk<AuthThunkReturn, SignUpForm, { rejectValue: string }>(
	'register',
	async (data, { rejectWithValue }) => {
		return register(data)
			.then(({ data }) => {
				setAccessToken(data.data.token);
				return data.data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);

export const fetchUserThunk = createAsyncThunk<User, undefined, { rejectValue: string }>(
	'getUser',
	async (_, { rejectWithValue }) => {
		return getUser()
			.then(({ data }) => {
				return data;
			})
			.catch(e => rejectWithValue(e.message));
	}
);
