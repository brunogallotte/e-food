import logo from '../../assets/images/logo.svg'

import { HeaderContainer, HeaderText, LinkHeader } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export const Header = () => {
  const dispatch = useDispatch()

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
        <HeaderText onClick={openCart}>0 produto(s) no carrinho</HeaderText>
      </div>
    </HeaderContainer>
  )
}
