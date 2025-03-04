import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeList } from '../components/CoffeeList'

export function Home() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-2 py-16">
				<div>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p className="mt-4 text-xl">
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<div className="grid grid-cols-2 gap-2 mt-16">
						<div>
							<div className="flex mb-3">
								<ShoppingCart
									size={32}
									weight="fill"
									color="#fafafa"
									className="p-1.5 rounded-full bg-orange-600"
								/>
								<p className="ml-2 self-center">Compra simples e segura</p>
							</div>
							<div className="flex mb-3">
								<Timer
									size={32}
									weight="fill"
									color="#fafafa"
									className="p-1.5 rounded-full bg-yellow-500"
								/>
								<p className="ml-2 self-center">Entrega rápida e rastreada</p>
							</div>
						</div>
						<div>
							<div className="flex mb-3">
								<Cube
									size={32}
									weight="fill"
									color="#fafafa"
									className="p-1.5 rounded-full bg-amber-900"
								/>
								<p className="ml-2 self-center">
									Embalagem mantém o café intacto
								</p>
							</div>
							<div className="flex mb-3">
								<Coffee
									size={32}
									weight="fill"
									color="#fafafa"
									className="p-1.5 rounded-full bg-green-800"
								/>
								<p className="ml-2 self-center">
									O café chega fresquinho até você
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="justify-self-center">
					<img src="/src/assets/coffee-home.png" />
				</div>
			</div>
			<CoffeeList />
		</div>
	)
}
