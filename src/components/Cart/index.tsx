import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import { CartContainer, CartItem, OrderBox, Overlay, Sidebar } from './styles'
import { Button } from '../Product/style'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const disptach = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    disptach(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Pizza margarita</h3>
              <p>R$ 60,90</p>
            </div>
            <img className="button-img" src={lixeira} />
          </CartItem>
        </ul>
        <OrderBox>
          <h4>Valor Total</h4>
          <p>R$ 182,70</p>
        </OrderBox>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
