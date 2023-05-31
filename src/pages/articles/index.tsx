import { FC, useEffect } from 'react';
import Error from '../../components/error';
import FilterBar from './components/filterBar';
import Card from 'components/card';
import Empty from 'components/empty';
import Loading from 'components/loading';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { articlesSelector } from 'store/selectors/articles';
import { fetchArticlesThunk } from 'store/slices/articles/thunk';
import './Articles.scss';

const Articles: FC = () => {
	const { error, loading, articles } = useAppSelector(articlesSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticlesThunk());
	}, []);

	return (
		<div className='articles'>
			<FilterBar />
			<div className='articles_container'>
				{!error &&
					!loading &&
					articles?.map((item, i) => (
						<div key={i} className='card_container'>
							<Card description={item?.description} src={item?.img_url} title={item?.title} />
						</div>
					))}
				{loading && <Loading />}
				{error && !loading && <Error message={error} />}
				{!loading && !error && !articles?.length && <Empty />}
			</div>
		</div>
	);
};

export default Articles;
