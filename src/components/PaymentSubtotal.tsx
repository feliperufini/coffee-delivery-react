import { CoffeePaymentItem } from "./CoffeePaymentItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

interface ComponenteProps {
  submitOrder: () => void;
}

export function PaymentSubtotal({ submitOrder }: ComponenteProps) {
  const { productsCart, addProductToCart, removeProductToCart } = useContext(ShoppingCartContext)
  const freightPrice = 5

  let totalOrderPrice = 0
  productsCart.forEach(product => {
    totalOrderPrice = totalOrderPrice + (product.price * product.amount)
  });

  function formatToBrPrice(price: number) {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="bg-stone-200 p-10 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
      {productsCart.map((orderItem) => (
        <CoffeePaymentItem coffeeData={orderItem} addProductToCart={addProductToCart} removeProductToCart={removeProductToCart} />
      ))}
      <div className="grid grid-cols-2 gap-4 text-lg mb-4">
        <div>
          <p className="mb-1">Total dos Itens</p>
          <p className="mb-1">Entrega</p>
          <h5 className="mb-2">Total</h5>
        </div>
        <div className="text-right text-lg">
          <p className="mb-1">R$ {formatToBrPrice(totalOrderPrice)}</p>
          <p className="mb-1">R$ {formatToBrPrice(totalOrderPrice ? freightPrice : 0)}</p>
          <h5 className="mb-2">R$ {formatToBrPrice(totalOrderPrice ? totalOrderPrice + freightPrice : 0)}</h5>
        </div>
      </div>
      <button
        type="button"
        onClick={submitOrder}
        className="w-full py-3 rounded-lg font-medium text-gray-100 bg-amber-900"
      >
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}
