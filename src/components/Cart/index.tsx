import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import { CartContainer, CartItem, OrderBox, Overlay, Sidebar } from './styles'
import { Button } from '../Product/style'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { isTemplateSpan } from 'typescript'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
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
          <p>{formataPreco(getTotalPrice())}</p>
        </OrderBox>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
