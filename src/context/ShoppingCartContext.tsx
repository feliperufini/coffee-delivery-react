import { ReactNode, createContext, useState } from "react";

interface ShoppingCart {
  name: string
  src: string
  amount: number
  price: number
}

interface ShoppingCartContextType {
  productsCart: ShoppingCart[]
  addProductToCart: (name: string, src: string, amountAdd: number, price: number) => void
  removeProductToCart: (name: string, amountAdd: number) => void
  clearCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [productsCart, setProductsCart] = useState<ShoppingCart[]>([])

  function addProductToCart(name: string, src: string, amountAdd: number, price: number) {
    const copyProductCart = [...productsCart]

    const item = copyProductCart.find((product) => product.name === name)

    if (!item) {
      copyProductCart.push({ name: name, src: src, amount: amountAdd, price: price })
    } else {
      item.amount = item.amount + amountAdd
    }

    setProductsCart(copyProductCart)
  }

  function removeProductToCart(name: string, amountSub: number) {
    const copyProductCart = [...productsCart]

    const item = copyProductCart.find((product) => product.name === name)
    const newAmount = item ? item.amount - amountSub : 0

    if (item && newAmount > 0) {
      item.amount = newAmount
      setProductsCart(copyProductCart)
    } else {
      const arrayFiltered = copyProductCart.filter((product) => product.name !== name)
      setProductsCart(arrayFiltered)
    }
  }

  function clearCart() {
    setProductsCart([])
  }

  return (
    <ShoppingCartContext.Provider value={{ productsCart, addProductToCart, removeProductToCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
