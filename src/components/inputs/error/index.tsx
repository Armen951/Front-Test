import { FC } from 'react';
import './Error.scss';

type Props = {
	message: string | undefined;
};

const Error: FC<Props> = ({ message }) => <div className='input_error'>{message}</div>;

export default Error;
