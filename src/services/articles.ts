import { GET_ARTICLES, GET_AUTHORS, GET_CATEGORIES, GET_NEWS, GET_RESOURCES } from 'urls/articles';
import AxiosInstance from 'lib/Instance';
import { ArticlesForm, NewsForm } from 'types/articles';

export const getArticles = (params?: ArticlesForm) => AxiosInstance(GET_ARTICLES, { params });
export const getNews = (params?: NewsForm) => AxiosInstance(GET_NEWS, { params });
export const getAuthors = () => AxiosInstance(GET_AUTHORS);
export const getResources = () => AxiosInstance(GET_RESOURCES);
export const getCategories = () => AxiosInstance(GET_CATEGORIES);
