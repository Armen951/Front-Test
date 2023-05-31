import { FC, useRef, useState } from 'react';
import { UseFormGetValues, UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import Error from 'components/inputs/error';
import Spinner from 'components/spinner';
import useOutsideClick from 'hooks/useOutsideClick';
import { SelectOption } from 'types/input';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrowUp.svg';
import './Select.scss';

type Props = {
	options: SelectOption[];
	placeholder: string;
	loading: boolean;
	error?: string;
	register: UseFormRegisterReturn;
	setValue: UseFormSetValue<any>;
	getValues: UseFormGetValues<any>;
	name: string;
};

const Select: FC<Props> = ({ options, placeholder, loading, error, register, setValue, getValues, name }) => {
	const refSelect = useRef(null);
	const [open, setOpen] = useState<boolean>(false);
	const [option, setOption] = useState<SelectOption>();

	const handleCloseSelect = () => setOpen(false);
	const handleToggleOpen = () => !error && setOpen(prev => !prev);
	const handleSelectValue = (item: SelectOption) => (): void => {
		setOption(item);
		handleCloseSelect();
		setValue(name, item.id);
	};

	useOutsideClick(refSelect, handleCloseSelect);

	return (
		<div ref={refSelect} className='select_container'>
			<div className={`select ${open ? 'select_open' : ''}`} onClick={handleToggleOpen}>
				{!loading && !error && (
					<>
						<input readOnly hidden {...register} />
						{option && getValues(name) ? <p>{option?.name}</p> : <p className='select_placeholder'>{placeholder}</p>}
						{open ? <ArrowUpIcon className='select_icon' /> : <ArrowDownIcon className='select_icon' />}
					</>
				)}
				{loading && <Spinner color='accent' />}
				{error && !loading && <Error message={error} />}
			</div>
			<div className={`select_options ${open ? '' : 'select_options_hidden'}`}>
				{options?.map((item, i) => (
					<div
						key={i}
						className={`option ${item?.name === option?.name && getValues(name) ? 'option_active' : ''}`}
						onClick={handleSelectValue(item)}
					>
						{item?.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Select;
