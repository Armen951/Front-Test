import { FC, useEffect } from 'react';
import FilterBar from './components/filterBar';
import Card from 'components/card';
import Empty from 'components/empty';
import Error from 'components/error';
import Loading from 'components/loading';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { articlesSelector } from 'store/selectors/articles';
import { fetchNewsFeedThunk } from 'store/slices/articles/thunk';
import './NewsFeed.scss';

const NewsFeed: FC = () => {
	const { error, loading, newsFeed } = useAppSelector(articlesSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNewsFeedThunk());
	}, []);

	return (
		<div className='newsFeed'>
			<FilterBar />
			<div className='articles_container'>
				{!error &&
					!loading &&
					newsFeed?.map((item, i) => (
						<div key={i} className='card_container'>
							<Card description={item?.description} src={item?.img_url} title={item?.title} />
						</div>
					))}
				{loading && <Loading />}
				{error && !loading && <Error message={error} />}
				{!loading && !error && !newsFeed?.length && <Empty />}
			</div>
		</div>
	);
};

export default NewsFeed;
