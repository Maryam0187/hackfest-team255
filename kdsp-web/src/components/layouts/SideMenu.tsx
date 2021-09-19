import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { removeLocalStorage } from '../../shared/LocalStorage'
import { AppPaths, TOKEN_KEY, USER_KEY } from '../../shared/constants'
import { useRedirect } from '../../hooks/useRedirect'
import { Button } from '@mui/material'
import SchedulePage from '../schedule/schedule'
import EnhancedTable from '../patients/Patients'

const drawerWidth = 240

function SideMenu() {
	const [mobileOpen, setMobileOpen] = React.useState(false)
	const [selectedView, setSelectedView] = React.useState('Patients')
	const { redirect } = useRedirect()

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{['Patients', 'Therapist', 'Schedules', 'Admin'].map((text, index) => (
					<ListItem button key={text} onClick={() => setSelectedView(text)}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['My Profile', 'Settings'].map((text, index) => (
					<ListItem button key={text} onClick={() => setSelectedView(text)}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

	const container = document.body

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						KDSP Admin Portal
					</Typography>
					<div
						style={{
							display: 'flex',
							justifyContent: 'right',
							width: '85%',
						}}
					>
						<Button
							variant="outlined"
							style={{
								background: 'white',
							}}
							onClick={() => {
								removeLocalStorage(TOKEN_KEY)
								removeLocalStorage(USER_KEY)
								redirect(AppPaths.Login)
							}}
							endIcon={<LogoutIcon />}
						>
							Logout
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<div style={{ display: 'flex' }}>
				<Toolbar />
				{selectedView === 'Schedules' ? (
					<SchedulePage />
				) : selectedView === 'Patients' ? (
					<EnhancedTable />
				) : (
					<Typography paragraph style={{ color: 'black' }}>
						{selectedView} Page
					</Typography>
				)}
			</div>
		</Box>
	)
}

export default SideMenu
