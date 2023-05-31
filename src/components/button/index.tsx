import { FC } from 'react';
import Spinner from 'components/spinner';
import { BUTTON_VARIANT_CONTAINED, BUTTON_VARIANT_LIST } from 'constants/button';
import './Button.scss';

type Props = {
	text: string;
	disabled?: boolean;
	loading?: boolean;
	type?: 'button' | 'submit';
	variant?: (typeof BUTTON_VARIANT_LIST)[number];
	onClick?: () => void;
};
const Button: FC<Props> = ({
	text,
	disabled = false,
	loading = false,
	type = 'submit',
	variant = BUTTON_VARIANT_CONTAINED,
	onClick,
}) => {
	return (
		<button className={`button button_${variant}`} type={type} disabled={disabled} onClick={onClick}>
			{loading ? <Spinner /> : text}
		</button>
	);
};

export default Button;
