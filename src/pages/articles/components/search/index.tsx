import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import './Search.scss';

type Props = {
	register: UseFormRegisterReturn;
};

const Search: FC<Props> = ({ register }) => {
	return (
		<div className='search'>
			<input id='search' autoComplete='off' placeholder='Search...' className='input' {...register} />
			<label htmlFor='search' className='search_icon_container'>
				<SearchIcon className='icon' />
			</label>
		</div>
	);
};

export default Search;
