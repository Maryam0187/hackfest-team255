import React, { lazy, Suspense } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppPaths } from './shared/constants'
import { useDocumentTitle } from './hooks/useDocumentTitle'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const App = (): JSX.Element => {
	useDocumentTitle('KDSP Portal')

	const LoginPage = lazy(() => import('./components/login/Login'))
	const Dashboard = lazy(() => import('./components/layouts/SideMenu'))

	return (
		<div className="App">
			<header className="App-header">
				<ToastContainer
					position={'bottom-right'}
					autoClose={3000}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
					limit={5}
					pauseOnFocusLoss={false}
				/>
				<BrowserRouter>
					<Suspense fallback={<div>Loading</div>}>
						<Switch>
							<Route
								exact
								path={AppPaths.Login}
								render={() => {
									return <LoginPage />
								}}
							/>
							<Route
								path={AppPaths.Dashboard}
								render={() => {
									return <Dashboard />
								}}
							/>
							<Route
								path="*"
								render={() => {
									console.log('unknown path, redirecting')
									return <Redirect push to={AppPaths.Login} />
								}}
							/>
						</Switch>
					</Suspense>
				</BrowserRouter>
			</header>
		</div>
	)
}

export default App
