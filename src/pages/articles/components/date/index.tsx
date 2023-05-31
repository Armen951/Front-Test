import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './Date.scss';

type Props = {
	register: UseFormRegisterReturn;
};

const Date: FC<Props> = ({ register }) => {
	return (
		<div className='date_container'>
			<input type='date' className='date' {...register} />
		</div>
	);
};

export default Date;
