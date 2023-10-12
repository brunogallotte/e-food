import logo from '../../assets/images/logo.svg'

import { HeaderContainer, HeaderText, LinkHeader } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderText>
          <LinkHeader to="/">Restaurantes</LinkHeader>
        </HeaderText>
        <img src={logo} />
        <HeaderText onClick={openCart}>
          {items.length} produto(s) no carrinho
        </HeaderText>
      </div>
    </HeaderContainer>
  )
}
