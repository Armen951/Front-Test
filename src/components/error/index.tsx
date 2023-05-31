import { FC } from 'react';
import './Error.scss';

type Props = {
	message: string;
};

const Error: FC<Props> = ({ message }) => {
	return (
		<div className='error'>
			<p className='error_text'>{message}</p>
		</div>
	);
};

export default Error;
