import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Error from 'components/inputs/error';
import Label from 'components/inputs/label';
import './Input.scss';

type Props = {
	id: string;
	label: string;
	placeholder: string;
	error?: FieldError | undefined;
	register: UseFormRegisterReturn;
};

const Input: FC<Props> = ({ id, label, placeholder, error, register }) => {
	return (
		<div className='input_container'>
			<div>
				<Label id={id} label={label} />
				<input id={id} autoComplete='off' {...register} placeholder={placeholder} className='input' maxLength={50} />
			</div>
			{error && <Error message={error.message} />}
		</div>
	);
};

export default Input;
