import { FC } from 'react';
import './Title.scss';

type Props = {
	title: string;
};

const Title: FC<Props> = ({ title }) => <h1 className='title'>{title}</h1>;

export default Title;
