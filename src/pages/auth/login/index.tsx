import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from 'components/button';
import Error from 'components/inputs/error';
import Input from 'components/inputs/input';
import Password from 'components/inputs/password';
import Title from 'components/title';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { userSelector } from 'store/selectors/user';
import { loginThunk } from 'store/slices/user/thunk';
import { ROUTE_SIGN_UP } from 'constants/router';
import { LoginForm } from 'types/auth';
import './Login.scss';

const Login: FC = () => {
	const dispatch = useAppDispatch();
	const { error, loading } = useAppSelector(userSelector);
	const { handleSubmit, register } = useForm<LoginForm>({
		mode: 'onBlur',
	});

	const handleOnSubmit = (data: LoginForm) => dispatch(loginThunk(data));

	return (
		<div className='login'>
			<Title title='Login' />
			<form onSubmit={handleSubmit(handleOnSubmit)} className='login_form'>
				<Input
					id='email'
					label='Email'
					placeholder='Enter your email'
					register={register('email', { required: 'Field is required' })}
				/>
				<Password
					id='password'
					label='Password'
					placeholder='Enter your password'
					register={register('password', { required: 'Field is required' })}
				/>
				{error && !loading && <Error message='Incorrect email or password.' />}
				<Button text='Log in' loading={loading} />
				<div className='login_form_footer'>
					<p>Don’t you have an account?</p>
					<Link to={ROUTE_SIGN_UP} className='link'>
						Sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
