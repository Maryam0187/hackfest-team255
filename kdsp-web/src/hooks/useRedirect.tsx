import { useHistory, useLocation } from 'react-router-dom'
import { History } from 'history'
import { useCallback, useMemo } from 'react'

export function useRedirect(): History<unknown> & {
	redirect: (path: string, useReplace?: boolean) => void
} {
	const history = useHistory()
	const { push, replace } = history
	const redirect = useCallback(
		(path: string, useReplace = false) =>
			useReplace ? replace(path) : push(path),
		[push, replace],
	)
	return { redirect, ...history }
}

export function useURL() {
	const location = useLocation()
	return useMemo(
		() => new URL(location.pathname + location.search, window.location.origin),
		[location.pathname, location.search],
	)
}
