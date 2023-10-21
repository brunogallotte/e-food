import * as S from './styles'

import logoImg from '../../assets/images/logo.svg'
import instaImg from '../../assets/images/insta.svg'
import faceImg from '../../assets/images/face.svg'
import twitterImg from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.FooterContainer>
    <img src={logoImg} />
    <S.BoxSocials>
      <S.SocialsItem>
        <img src={instaImg} />
      </S.SocialsItem>
      <S.SocialsItem>
        <img src={faceImg} />
      </S.SocialsItem>
      <S.SocialsItem>
        <img src={twitterImg} />
      </S.SocialsItem>
    </S.BoxSocials>
    <S.FooterDescription>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.FooterDescription>
  </S.FooterContainer>
)

export default Footer
