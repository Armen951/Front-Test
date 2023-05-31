import { FC } from 'react';
import { ReactComponent as CircleIcon } from 'assets/icons/circle.svg';
import './Spinner.scss';

type Props = {
	color?: 'accent';
};

const Spinner: FC<Props> = ({ color }) => (
	<div className='spinner_container'>
		<CircleIcon className={`spinner spinner_${color}`} />
	</div>
);

export default Spinner;
