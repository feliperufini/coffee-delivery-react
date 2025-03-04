import { Outlet } from 'react-router-dom'
import { TopMenu } from '../components/TopMenu'

export function DefaultLayout() {
	return (
		<div className="max-w-[90rem] mx-auto flex flex-col">
			<TopMenu />
			<div className="mt-32" />
			<Outlet />
		</div>
	)
}
