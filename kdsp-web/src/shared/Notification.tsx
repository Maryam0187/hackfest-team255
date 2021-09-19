import React from 'react'
interface NotificationProps {
	message: string
}

export const Notification = (props: NotificationProps): JSX.Element => {
	const { message } = props
	return (<span style={{fontSize:'0.5em'}}>{message}</span>)
}
