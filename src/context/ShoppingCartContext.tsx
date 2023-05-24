import { ReactNode, createContext, useState } from "react";

interface ShoppingCart {
  id: string
  amount: number
}

interface ShoppingCartContextType {
  productsCart: ShoppingCart[]
  addProductToCart: (id: string, amountAdd: number) => void
  removeProductToCart: (id: string, amountAdd: number) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
  const [productsCart, setProductsCart] = useState<ShoppingCart[]>([])

  function addProductToCart(id: string, amountAdd: number) {
    const copyProductCart = [...productsCart]

    const item = copyProductCart.find((product) => product.id === id)

    if (!item) {
      copyProductCart.push({ id: id, amount: amountAdd })
    } else {
      item.amount = item.amount + amountAdd
    }

    setProductsCart(copyProductCart)
  }

  function removeProductToCart(id: string, amountSub: number) {
    const copyProductCart = [...productsCart]

    const item = copyProductCart.find((product) => product.id === id)
    const newAmount = item ? item.amount - amountSub : 0

    if (item && newAmount > 0) {
      item.amount = newAmount
      setProductsCart(copyProductCart)
    } else {
      const arrayFiltered = copyProductCart.filter((product) => product.id !== id)
      setProductsCart(arrayFiltered)
    }
  }

  return (
    <ShoppingCartContext.Provider value={{ productsCart, addProductToCart, removeProductToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
