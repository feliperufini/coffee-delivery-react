import { Trash } from "phosphor-react";

interface CoffeeDataProps {
  name: string
  src: string
  amount: number
  price: number
}

export function CoffeePaymentItem(props: {
  coffeeData: CoffeeDataProps,
  addProductToCart: (name: string, src: string, amountAdd: number, price: number) => void, removeProductToCart: (name: string, amountSub: number) => void
}) {

  const formattedPrice = (props.coffeeData.price * props.coffeeData.amount).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return (
    <div className="flex gap-4 border-b-2 border-stone-300 pb-6 mb-6">
      <img src={props.coffeeData.src} className="w-16 h-16 self-center" />
      <div>
        <p className="font-medium text-xl mb-2">{props.coffeeData.name}</p>
        <div className="flex gap-2">
          <div className="flex gap-4 px-3 rounded-md bg-gray-100 text-amber-800">
            <p
              className="text-2xl mt-[-4px] cursor-pointer [-webkit-user-select:none] hover:font-medium"
              onClick={() => { props.removeProductToCart(props.coffeeData.name, 1) }}
            >_</p>
            <p className="text-xl self-center font-medium [-webkit-user-select:none]">
              {props.coffeeData.amount}
            </p>
            <p
              className="text-2xl self-center cursor-pointer [-webkit-user-select:none] hover:font-medium"
              onClick={() => { props.addProductToCart(props.coffeeData.name, props.coffeeData.src, 1, props.coffeeData.price) }}
            >+</p>
          </div>
          <button
            type="button"
            onClick={() => props.removeProductToCart(props.coffeeData.name, props.coffeeData.amount)}
            className="flex gap-2 bg-gray-100 text-amber-800 font-normal border-[1px] px-4 py-2 rounded-lg items-center justify-center hover:outline hover:outline-1 hover:outline-amber-800"
          >
            <Trash size={24} />
            REMOVER
          </button>
        </div>
      </div>
      <div className="flex gap-2 ml-auto">
        <p className="font-medium text-xl">R$</p>
        <h5>{formattedPrice}</h5>
      </div>
    </div>
  )
}
