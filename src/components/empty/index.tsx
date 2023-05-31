import { FC } from 'react';
import './Empty.scss';

const Empty: FC = () => {
	return (
		<div className='empty'>
			<p className='empty_text'>Not Available...</p>
		</div>
	);
};

export default Empty;
