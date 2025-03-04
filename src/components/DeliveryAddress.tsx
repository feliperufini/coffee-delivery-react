import { MapPinLine } from 'phosphor-react'
import { FormProps } from '../pages/CheckoutOrder'

interface ComponenteProps {
	formData: FormProps
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function DeliveryAddress({ formData, handleChange }: ComponenteProps) {
	const myInputClass =
		'bg-gray-100 border border-gray-300 text-amber-900 text-md rounded-lg w-full p-2.5 focus-visible:outline focus-visible:outline-amber-700'

	return (
		<div className="bg-stone-200 p-10 mb-4 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
			<div className="flex gap-2 mb-4">
				<MapPinLine size={32} className="text-amber-700" />
				<div className="text-left">
					<p className="font-medium text-xl">Endereço de Entrega</p>
					<p>Informe o endereço onde deseja receber o seu pedido</p>
				</div>
			</div>
			<div className="grid grid-cols-6 gap-4">
				<input
					type="text"
					name="cep"
					value={formData.cep}
					placeholder="CEP"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-2'}
				/>
				<input
					type="text"
					name="rua"
					value={formData.rua}
					placeholder="Rua"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-6'}
				/>
				<input
					type="text"
					name="numero"
					value={formData.numero}
					placeholder="Número"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-2'}
				/>
				<input
					type="text"
					name="complemento"
					value={formData.complemento}
					placeholder="Complemento"
					onChange={handleChange}
					className={myInputClass + ' col-span-4'}
				/>
				<input
					type="text"
					name="bairro"
					value={formData.bairro}
					placeholder="Bairro"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-2'}
				/>
				<input
					type="text"
					name="cidade"
					value={formData.cidade}
					placeholder="Cidade"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-3'}
				/>
				<input
					type="text"
					name="uf"
					value={formData.uf}
					placeholder="UF"
					onChange={handleChange}
					required
					className={myInputClass + ' col-span-1'}
				/>
			</div>
		</div>
	)
}
