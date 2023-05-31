import { FC, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Error from 'components/inputs/error';
import Label from 'components/inputs/label';
import { ReactComponent as EyeIcon } from 'assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from 'assets/icons/eyeSlash.svg';
import './Password.scss';

type Props = {
	id: string;
	label: string;
	placeholder: string;
	error?: FieldError | undefined;
	register: UseFormRegisterReturn;
};

const Password: FC<Props> = ({ id, label, placeholder, error, register }) => {
	const [show, setShow] = useState<boolean>(false);

	const handleToggleShow = () => setShow(prev => !prev);

	return (
		<div className='password_container'>
			<div>
				<Label id={id} label={label} />
				<div className='password'>
					<input
						type={show ? 'text' : 'password'}
						id={id}
						autoComplete='off'
						{...register}
						placeholder={placeholder}
						className='input'
						maxLength={50}
					/>
					<div className='password_icon_container'>
						{show ? (
							<EyeSlashIcon className='password_icon icon_eyeSlash' onClick={handleToggleShow} />
						) : (
							<EyeIcon className='password_icon icon_eye' onClick={handleToggleShow} />
						)}
					</div>
				</div>
			</div>
			{error && <Error message={error.message} />}
		</div>
	);
};

export default Password;
