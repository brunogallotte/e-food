import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

import * as S from './styles'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.HeaderText>
          <S.LinkHeader to="/">Restaurantes</S.LinkHeader>
        </S.HeaderText>
        <img src={logo} />
        <S.HeaderText onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.HeaderText>
      </div>
    </S.HeaderContainer>
  )
}
