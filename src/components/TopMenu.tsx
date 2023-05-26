import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export function TopMenu() {
  const { productsCart } = useContext(ShoppingCartContext)
  let totalItems = 0

  productsCart.forEach(product => {
    totalItems = totalItems + product.amount
  });

  return (
    <div className="flex fixed justify-between px-4 py-10 overflow-hidden top-0 w-[90rem] bg-[#f1f1f1]">
      <Link to="/">
        <div className="flex">
          <img src="https://verdebuild.com/wp-content/uploads/Starbucks-Logo-PNG-Image.png" width={40} />
          <h5 className="text-green-800 self-center pl-1">CoffeeDelivery</h5>
        </div>
      </Link>
      <div className="flex gap-3">
        <button className="flex items-center px-3 rounded-md font-normal bg-green-200 text-green-800 hover:bg-green-300">
          <MapPin size={22} weight="fill" />
          Ji-Paraná, RO
        </button>
        <Link to="/checkout">
          <button className="w-[38px] h-[38px] rounded-md bg-amber-200 text-amber-900 [text-align:-webkit-center] hover:bg-amber-300">
            <ShoppingCart size={22} weight="fill" />
            <span className="absolute h-5 w-5 pt-[2px] mt-[-40px] ml-[10px] rounded-full text-xs font-medium text-amber-100 bg-amber-700">
              {totalItems}
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
