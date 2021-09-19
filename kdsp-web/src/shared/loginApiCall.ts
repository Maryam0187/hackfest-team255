import { notifyError, notifySuccess } from '../api/notification.api'
import { postCall } from '../api/api'
import { LoginForm } from '../models/User'
import { setLocalStorage } from './LocalStorage'
import { TOKEN_KEY, USER_KEY } from './constants'

const loginApi = async (values: LoginForm): Promise<void> => {
	const response = postCall('/api/user/login', {
		email: values.email,
		password: values.password,
	})
	return response
		.then((result: any) => {
			console.log('Result: ', result)
			setLocalStorage(USER_KEY, result?.data.user)
			setLocalStorage(TOKEN_KEY, result?.data.token)
			notifySuccess('Logged in successfully')
		})
		.catch((error) => {
			console.log('Error: ', error)
			notifyError('Incorrect email or password')
		})
}

export default loginApi
