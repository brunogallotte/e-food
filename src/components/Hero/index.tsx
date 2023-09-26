import { HeroTitle, Imagem } from './styles'

import vectorImg from '../../assets/images/Vector.svg'
import logoImg from '../../assets/images/logo.svg'
import { Container } from '../../styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${vectorImg})` }}>
    <Container>
      <img src={logoImg} />
      <HeroTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </HeroTitle>
    </Container>
  </Imagem>
)

export default Hero
