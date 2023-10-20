import lixeira from '../../assets/images/lixeira.png'
import { CartContainer, CartItem, OrderBox, Overlay, Sidebar } from './styles'
import { Button } from '../Product/style'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import Checkout from '../Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const [payment, setPayment] = useState(false)
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <img
                    onClick={() => removeItem(item.id)}
                    className="button-img"
                    src={lixeira}
                  />
                </CartItem>
              ))}
            </ul>
            <OrderBox>
              <h4>Valor Total</h4>
              <p>{parseToBrl(getTotalPrice(items))}</p>
            </OrderBox>
            <Button onClick={() => setPayment(true)}>
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <Checkout setPayment={setPayment} />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
