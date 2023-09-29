import logo from '../../assets/images/logo.svg'

import { HeaderContainer, HeaderText, LinkHeader } from './styles'

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <HeaderText>
        <LinkHeader to="/">Restaurantes</LinkHeader>
      </HeaderText>
      <img src={logo} />
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </div>
  </HeaderContainer>
)
