import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CheckoutOrder } from './pages/CheckoutOrder'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<CheckoutOrder />} />
				<Route path="/confirmed" element={<ConfirmedOrder />} />
			</Route>
		</Routes>
	)
}
