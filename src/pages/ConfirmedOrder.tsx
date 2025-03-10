import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { FormProps } from './CheckoutOrder'

interface LocationState {
	formData: FormProps
}

export function ConfirmedOrder() {
	const location = useLocation<LocationState>()
	const formData = location.state.formData

	return (
		<div className="grid grid-cols-2 gap-8 py-8">
			<div>
				<h4 className="text-amber-700 mb-2">Uhu! Pedido confirmado</h4>
				<p className="text-xl mb-12">
					Agora é só aguardar que logo o café chegará até você
				</p>
				<div className="bg-gradient p-10 mb-4 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
					<div className="flex gap-3 items-center mb-6">
						<MapPin
							size={32}
							weight="fill"
							className="p-1.5 rounded-full text-gray-100 bg-purple-700"
						/>
						<div>
							<p className="text-xl">
								Entrega em{' '}
								<b>
									{formData.rua}, {formData.numero}
								</b>
							</p>
							<p className="text-xl">
								{formData.bairro} - {formData.cidade}, {formData.uf}
							</p>
						</div>
					</div>
					<div className="flex gap-3 items-center mb-6">
						<Timer
							size={32}
							weight="fill"
							className="p-1.5 rounded-full text-gray-100 bg-yellow-500"
						/>
						<div>
							<p className="text-xl">Previsão de entrega</p>
							<b className="text-xl">20min - 30min</b>
						</div>
					</div>
					<div className="flex gap-3 items-center">
						<CurrencyDollar
							size={32}
							weight="fill"
							className="p-1.5 rounded-full text-gray-100 bg-amber-800"
						/>
						<div>
							<p className="text-xl">Pagamento na entrega</p>
							<b className="text-xl">
								{formData.paymentType === 'credit'
									? 'Cartão de Crédito'
									: formData.paymentType === 'debit'
										? 'Cartão de Débito'
										: 'Dinheiro'}
							</b>
						</div>
					</div>
				</div>
			</div>
			<img src="/src/assets/finished-order.png" className="w-[50vw]" />
		</div>
	)
}
