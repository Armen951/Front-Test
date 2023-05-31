import { FC } from 'react';
import './Label.scss';

type Props = {
	label: string;
	id: string;
};

const Label: FC<Props> = ({ label, id }) => (
	<label htmlFor={id} className='label'>
		{label}
	</label>
);

export default Label;
