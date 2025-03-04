import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FormProps } from '../pages/CheckoutOrder'

interface ComponenteProps {
	formData: FormProps
}

export function PaymentMode({ formData }: ComponenteProps) {
	let selectedButton: HTMLButtonElement | null = null
	const paymentItemCSS =
		'flex gap-2 bg-gray-100 border-[1px] px-4 py-2 rounded-lg items-center justify-center hover:outline hover:outline-1 hover:outline-green-300'

	function selectPaymentMode(mode: number) {
		if (selectedButton) {
			selectedButton.classList.remove('active')
		}

		const newButton: HTMLButtonElement | null = document.querySelector(
			`.payment-mode button:nth-child(${mode})`,
		)
		if (newButton) {
			newButton.classList.add('active')
			selectedButton = newButton
			if (mode === 1) {
				formData.paymentType = 'credit'
			} else if (mode === 2) {
				formData.paymentType = 'debit'
			} else if (mode === 3) {
				formData.paymentType = 'money'
			}
		}
	}

	return (
		<div className="bg-stone-200 p-10 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
			<div className="flex gap-2 mb-4">
				<CurrencyDollar size={32} className="text-green-700" />
				<div className="text-left">
					<p className="font-medium text-xl">Pagamento</p>
					<p>
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</p>
				</div>
			</div>
			<div className="payment-mode grid grid-cols-3 gap-4" role="group">
				<button
					type="button"
					onClick={() => selectPaymentMode(1)}
					className={paymentItemCSS}
				>
					<CreditCard size={32} className="text-green-700" />
					CARTÃO DE CRÉDITO
				</button>
				<button
					type="button"
					onClick={() => selectPaymentMode(2)}
					className={paymentItemCSS}
				>
					<Bank size={32} className="text-green-700" />
					CARTÃO DE DÉBITO
				</button>
				<button
					type="button"
					onClick={() => selectPaymentMode(3)}
					className={paymentItemCSS}
				>
					<Money size={32} className="text-green-700" />
					DINHEIRO
				</button>
			</div>
		</div>
	)
}
