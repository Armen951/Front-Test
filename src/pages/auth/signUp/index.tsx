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
import { registerThunk } from 'store/slices/user/thunk';
import { ROUTE_LOGIN } from 'constants/router';
import { email, name } from 'utils/validation';
import { SignUpForm } from 'types/auth';
import './SignUp.scss';

const SignUp: FC = () => {
	const { error, loading } = useAppSelector(userSelector);
	const dispatch = useAppDispatch();

	const {
		handleSubmit,
		register,
		getValues,
		formState: { errors },
	} = useForm<SignUpForm>({ mode: 'onBlur' });

	const handleOnSubmit = (data: SignUpForm) => dispatch(registerThunk(data));

	return (
		<div className='signUp'>
			<Title title='Sign Up' />
			<form onSubmit={handleSubmit(handleOnSubmit)} className='signUp_form'>
				<Input
					id='name'
					label='Name'
					placeholder='Enter your name'
					error={errors.name}
					register={register('name', {
						required: 'Field is required',
						pattern: {
							value: name,
							message: 'Please enter a correct name.',
						},
					})}
				/>
				<Input
					id='email'
					label='Email'
					placeholder='Enter your email'
					error={errors.email}
					register={register('email', {
						required: 'Field is required',
						pattern: {
							value: email,
							message: 'Please enter a valid email address.',
						},
					})}
				/>
				<Password
					id='password'
					label='Password'
					placeholder='Enter your password'
					error={errors.password}
					register={register('password', {
						required: 'Field is required',
						minLength: {
							value: 8,
							message: 'At least 8 characters required.',
						},
					})}
				/>
				<Password
					id='confirmPassword'
					label='Confirm Password'
					placeholder='Enter your confirm password'
					error={errors.c_password}
					register={register('c_password', {
						required: 'Field is required',
						validate: (value: string) => {
							if (getValues('password') !== value) return 'Passwords does not match';
						},
					})}
				/>
				{error && !loading && <Error message={error} />}
				<Button text='Create account' loading={loading} />
				<div className='signUp_form_footer'>
					<p>Already have an account?</p>
					<Link to={ROUTE_LOGIN} className='link'>
						Log in
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
