import { configureStore } from '@reduxjs/toolkit';
import articles from 'store/slices/articles/articlesSlice';
import user from 'store/slices/user/userSlice';

const store = configureStore({
	reducer: {
		user,
		articles,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
