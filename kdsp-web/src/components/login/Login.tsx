import { Button, Card, CardContent, Divider, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import { makeStyles } from '@mui/styles'
import Logo from '../../assets/logoimage.jpeg'
import loginApi from '../../shared/loginApiCall'
import SignInFormSchema, { LoginForm } from '../../models/User'
import { getLocalStorage } from '../../shared/LocalStorage'
import { AppPaths, TOKEN_KEY } from '../../shared/constants'
import { useRedirect } from '../../hooks/useRedirect'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	textField: {
		paddingTop: '10px !important',
		paddingBottom: '10px !important',
		fontSize: '1em',
	},
	buttonPadding: {
		marginTop: '15px !important',
		marginBottom: '10px !important',
	},
	logo: {
		height: '6.5em',
	},
	card: {
		padding: '8px !important',
		maxWidth: '350px',
	},
	center: {
		textAlign: 'center',
	},
	divider: {
		backgroundColor: 'black',
		margin: '8px 0 !important',
	},
})

const Login = (): JSX.Element => {
	const classes = useStyles()
	const { redirect } = useRedirect()

	const SignInData: LoginForm = {
		email: '',
		password: '',
	}

	const {
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		touched,
		isValid,
	} = useFormik<LoginForm>({
		initialValues: SignInData,
		validationSchema: SignInFormSchema,
		onSubmit: (values) => {
			loginApi(values).then(() => {
				const tokenSet = getLocalStorage(TOKEN_KEY) !== ''
				if (tokenSet) redirect(AppPaths.Dashboard)
			})
		},
	})

	const onSubmit = () => {
		handleSubmit()
	}
	return (
		<form>
			<Card className={classes.card} elevation={8}>
				<CardContent>
					<div className={classes.center}>
						<img className={classes.logo} src={Logo} alt="optergy_logo" />
					</div>
					<Divider
						classes={{
							root: classes.divider,
						}}
					/>
					<TextField
						className={classes.textField}
						id="outlined-basic"
						label="Email"
						name="email"
						variant="standard"
						fullWidth
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.email && !!errors.email}
						helperText={touched.email && errors.email}
					/>
					<TextField
						className={classes.textField}
						id="outlined-basic"
						name="password"
						variant="standard"
						fullWidth
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.password && !!errors.password}
						helperText={touched.password && errors.password}
						label="Password"
						type="password"
					/>
					<Button
						className={classes.buttonPadding}
						variant="contained"
						fullWidth
						onClick={onSubmit}
						disabled={!isValid}
					>
						Login
					</Button>
				</CardContent>
			</Card>
		</form>
	)
}

export default Login
