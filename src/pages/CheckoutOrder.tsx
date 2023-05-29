import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeliveryAddress } from "../components/DeliveryAddress";
import { PaymentMode } from "../components/PaymentMode";
import { PaymentSubtotal } from "../components/PaymentSubtotal";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export interface FormProps {
  cep: string,
  rua: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  paymentType: string,
}

export function CheckoutOrder() {
  const navigate = useNavigate();
  const { productsCart, clearCart } = useContext(ShoppingCartContext)
  const [formData, setFormData] = useState<FormProps>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    paymentType: '',
  })

  const handleChange = (event: { target: { name: string; value: string; } }) => {
    const { name, value } = event.target
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const submitOrder = () => {
    console.log(productsCart)

    if (productsCart.length === 0) {
      alert('Não existem itens adicionados ao carrinho!')
    } else if (formData.cep && formData.rua && formData.numero && formData.bairro && formData.cidade && formData.uf && formData.paymentType) {
      clearCart()
      navigate('/confirmed', { state: { formData } });
    } else {
      alert('O formulário não foi preenchido corretamente!')
    }
  }

  return (
    <form action="">
      <div className="grid grid-cols-12 gap-8 py-8">
        <div className="col-span-7">
          <h5 className="mb-4">Complete seu pedido</h5>
          <DeliveryAddress formData={formData} handleChange={handleChange} />
          <PaymentMode formData={formData} />
        </div>
        <div className="col-span-5">
          <h5 className="mb-4">Cafés selecionados</h5>
          <PaymentSubtotal submitOrder={submitOrder} />
        </div>
      </div>
    </form>
  )
}
