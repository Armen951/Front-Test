import { FC } from 'react';
import './Card.scss';

type Props = {
	description: string;
	src: string;
	title: string;
};

const Card: FC<Props> = ({ description, src, title }) => {
	return (
		<div className='card'>
			<div className='card_img_container'>
				<img src={src} alt='article' />
			</div>
			<div className='card_body'>
				<p className='card_body_title'>{title}</p>
				<p className='card_body_desc'>{description}</p>
			</div>
		</div>
	);
};

export default Card;
