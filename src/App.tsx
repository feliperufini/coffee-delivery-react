import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingCartContextProvider } from './context/ShoppingCartContext'

export function App() {
	return (
		<BrowserRouter>
			<ShoppingCartContextProvider>
				<Router />
			</ShoppingCartContextProvider>
		</BrowserRouter>
	)
}
