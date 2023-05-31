import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';
import { fetchUserThunk, loginThunk, registerThunk } from './thunk';

const { reducer, actions } = createSlice({
	name: 'user',
	initialState,
	reducers: {
		cleanUserSlice: state => {
			state.token = '';
			state.user = {};
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginThunk.pending, state => {
				state.loading = true;
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.token = payload.token;
				state.user.name = payload.name;
				state.error = '';
			})
			.addCase(loginThunk.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(registerThunk.pending, state => {
				state.loading = true;
			})
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.token = payload.token;
				state.user.name = payload.name;
				state.error = '';
			})
			.addCase(registerThunk.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			})
			.addCase(fetchUserThunk.pending, state => {
				state.loading = true;
			})
			.addCase(fetchUserThunk.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.user = payload;
				state.error = '';
			})
			.addCase(fetchUserThunk.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});

export const { cleanUserSlice } = actions;
export default reducer;
