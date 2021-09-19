import { toast } from 'react-toastify'
import React from 'react'
import { Notification } from '../shared/Notification'

export function notify(message: string): void {
	toast(<Notification message={message} />)
}

export function notifySuccess(message: string): void {
	toast.success(<Notification message={message} />)
}

export function notifyError(message: string): void {
	toast.error(<Notification message={message} />)
}
