import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

export function CoffeeListItem({
	src,
	tags,
	title,
	description,
	price,
}: {
	src: string
	tags: string[]
	title: string
	description: string
	price: number
}) {
	const { addProductToCart } = useContext(ShoppingCartContext)
	const [amount, setAmount] = useState(1)
	const formattedPrice = price.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})

	return (
		<div className="text-center bg-stone-200 px-8 py-4 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
			<img src={src} className="m-auto mb-4 mt-[-40px]" />
			<div className="flex gap-2 justify-center mb-4">
				{tags.map((tag, i) => (
					<p
						key={i}
						className="text-sm font-medium px-2 rounded-md text-amber-700 bg-amber-100"
					>
						{tag.toUpperCase()}
					</p>
				))}
			</div>
			<h5 className="mb-4">{title}</h5>
			<p className="mb-8">{description}</p>
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-5 flex gap-1">
					<p className="mt-auto mb-1">R$</p>
					<h5>{formattedPrice}</h5>
				</div>
				<div className="col-span-7 flex gap-2">
					<div className="flex gap-4 px-3 rounded-md bg-amber-100 text-amber-900">
						<p
							className="text-2xl mt-[-5px] cursor-pointer [-webkit-user-select:none] hover:font-medium"
							onClick={() => {
								setAmount(amount === 1 ? 1 : amount - 1)
							}}
						>
							_
						</p>
						<p className="text-xl self-center font-medium [-webkit-user-select:none] hover:font-medium">
							{amount}
						</p>
						<p
							className="text-2xl self-center cursor-pointer [-webkit-user-select:none] hover:font-medium"
							onClick={() => {
								setAmount(amount === 99 ? 99 : amount + 1)
							}}
						>
							+
						</p>
					</div>
					<button
						className="w-[38px] h-[38px] rounded-md bg-amber-900 text-zinc-100 [text-align:-webkit-center] hover:bg-amber-800"
						onClick={() => {
							addProductToCart(title, src, amount, price)
						}}
					>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</div>
			</div>
		</div>
	)
}
