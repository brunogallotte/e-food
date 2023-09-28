import logoImg from '../../assets/images/logo.svg'
import {
  BoxSocials,
  FooterContainer,
  FooterDescription,
  SocialsItem
} from './styles'

import instaImg from '../../assets/images/insta.svg'
import faceImg from '../../assets/images/face.svg'
import twitterImg from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logoImg} />
    <BoxSocials>
      <SocialsItem>
        <img src={instaImg} />
      </SocialsItem>
      <SocialsItem>
        <img src={faceImg} />
      </SocialsItem>
      <SocialsItem>
        <img src={twitterImg} />
      </SocialsItem>
    </BoxSocials>
    <FooterDescription>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </FooterDescription>
  </FooterContainer>
)

export default Footer
