import * as Yup from 'yup'

export interface UserInfo {
	email: string
	password: string
}

export interface LoginForm {
	email: string
	password: string
}

const SignInFormSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email cannot be empty'),
	password: Yup.string()
		.required('Password cannot be empty.')
		.min(6, 'Password is too short - should be 6 chars minimum.'),
})

export default SignInFormSchema
