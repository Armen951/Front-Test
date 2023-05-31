import { FC } from 'react';
import './Loading.scss';

const Loading: FC = () => {
	return (
		<div className='loading'>
			<p className='loading_text'>Loading ...</p>
		</div>
	);
};

export default Loading;
