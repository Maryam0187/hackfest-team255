import { useEffect } from 'react'

export function useDocumentTitle(
	title: string,
	defaultTitle = 'KDSP Portal',
): void {
	useEffect(() => {
		document.title = title
		return () => {
			document.title = defaultTitle
		}
	}, [title, defaultTitle])
}
