import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'

import { getTotalPrice, parseToBrl } from '../../utils'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { Button } from '../Product/style'
import Checkout from '../Checkout'
import lixeira from '../../assets/images/lixeira.png'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {!payment ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
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
                </S.CartItem>
              ))}
            </ul>
            <S.OrderBox>
              <h4>Valor Total</h4>
              <p>{parseToBrl(getTotalPrice(items))}</p>
            </S.OrderBox>
            <Button onClick={() => setPayment(true)}>
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <Checkout setPayment={setPayment} />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
