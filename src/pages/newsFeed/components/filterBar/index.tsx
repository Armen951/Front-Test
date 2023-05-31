import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'components/button';
import Select from 'components/select';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { articlesSelector } from 'store/selectors/articles';
import {
	fetchAuthorsThunk,
	fetchCategoriesThunk,
	fetchNewsFeedThunk,
	fetchResourcesThunk,
} from 'store/slices/articles/thunk';
import { cleanFields } from 'helpers/cleanFields';
import { NewsForm } from 'types/articles';
import './FilterBar.scss';

const FilterBar: FC = () => {
	const dispatch = useAppDispatch();

	const { errorAuthors, errorResources, errorCategories, loadingFilters, resources, categories, authors } =
		useAppSelector(articlesSelector);
	const [isValid, setIsValid] = useState(false);

	const { handleSubmit, register, setValue, getValues, reset, watch } = useForm<NewsForm>({ mode: 'onSubmit' });

	useEffect(() => {
		Promise.all([dispatch(fetchResourcesThunk()), dispatch(fetchCategoriesThunk()), dispatch(fetchAuthorsThunk())]);
	}, []);

	useEffect(() => {
		const subscription = watch(values => {
			if (values.category_id || values.author_id || values.resource_id) {
				return setIsValid(true);
			}
			setIsValid(false);
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const handleSubmitForm: SubmitHandler<NewsForm> = data => {
		dispatch(fetchNewsFeedThunk(cleanFields(data)));
	};

	const handleClearFilters = () => {
		dispatch(fetchNewsFeedThunk())
			.unwrap()
			.then(() => reset());
	};

	return (
		<form className='filter_bar_newsFeed' onSubmit={handleSubmit(handleSubmitForm)}>
			<div className='filter_bar_newsFeed_fields'>
				<Select
					options={resources}
					placeholder='Select resources'
					loading={loadingFilters}
					error={errorResources}
					register={register('resource_id')}
					setValue={setValue}
					getValues={getValues}
					name='resource_id'
				/>
				<Select
					options={categories}
					placeholder='Select categories'
					loading={loadingFilters}
					error={errorCategories}
					register={register('category_id')}
					setValue={setValue}
					getValues={getValues}
					name='category_id'
				/>
				<Select
					options={authors}
					placeholder='Select authors'
					loading={loadingFilters}
					error={errorAuthors}
					register={register('author_id')}
					setValue={setValue}
					getValues={getValues}
					name='author_id'
				/>
			</div>
			<div className='filter_bar_newsFeed_buttons'>
				<Button text='Clear' type='button' variant='outlined' disabled={!isValid} onClick={handleClearFilters} />
				<Button text='Filter' disabled={!isValid} />
			</div>
		</form>
	);
};

export default FilterBar;
