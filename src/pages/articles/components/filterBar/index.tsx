import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'components/button';
import Select from 'components/select';
import Date from 'pages/articles/components/date';
import Search from 'pages/articles/components/search';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { articlesSelector } from 'store/selectors/articles';
import { fetchArticlesThunk, fetchCategoriesThunk, fetchResourcesThunk } from 'store/slices/articles/thunk';
import { cleanFields } from 'helpers/cleanFields';
import { ArticlesForm } from 'types/articles';
import './FilterBar.scss';

const FilterBar: FC = () => {
	const dispatch = useAppDispatch();
	const { errorCategories, errorResources, loadingFilters, resources, categories } = useAppSelector(articlesSelector);
	const [isValid, setIsValid] = useState(false);

	const { handleSubmit, register, setValue, reset, getValues, watch } = useForm<ArticlesForm>({ mode: 'onSubmit' });

	useEffect(() => {
		Promise.all([dispatch(fetchResourcesThunk()), dispatch(fetchCategoriesThunk())]);
	}, []);

	useEffect(() => {
		const subscription = watch(values => {
			if (values.category_id || values.date || values.resource_id || values.search) {
				return setIsValid(true);
			}
			setIsValid(false);
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const handleSubmitForm: SubmitHandler<ArticlesForm> = data => {
		dispatch(fetchArticlesThunk(cleanFields(data)));
	};

	const handleClearFilters = () => {
		dispatch(fetchArticlesThunk())
			.unwrap()
			.then(() => reset());
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className='filter_bar_articles'>
			<div className='filter_bar_articles_fields'>
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
					options={resources}
					placeholder='Select resources'
					loading={loadingFilters}
					error={errorResources}
					register={register('resource_id')}
					setValue={setValue}
					getValues={getValues}
					name='resource_id'
				/>
				<Date register={register('date')} />
				<Search register={register('search')} />
			</div>
			<div className='filter_bar_articles_buttons'>
				<Button text='Clear' type='button' variant='outlined' disabled={!isValid} onClick={handleClearFilters} />
				<Button text='Filter' disabled={!isValid} />
			</div>
		</form>
	);
};

export default FilterBar;
