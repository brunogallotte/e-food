import { TagContainer } from '../Tag/styles'
import { useMediaQuery } from 'react-responsive'

import {
  BotaoSaibaMais,
  BoxInfo,
  BoxNota,
  BoxTitulo,
  Card,
  Descricao,
  Infos,
  Nota,
  StyledLink,
  Titulo
} from './styles'

import imgEstrela from '../../assets/images/estrela.svg'
import { Restaurante } from '../../pages/Home'

const RestauranteItem = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  id
}: Restaurante) => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767 })
  const isTabletScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isLargeScreen = useMediaQuery({ minWidth: 1023 })

  const getDescricao = (descricao: string) => {
    if (isMobileScreen && descricao.length > 50) {
      return descricao.slice(0, 140) + '...'
    } else if (isTabletScreen && descricao.length > 100) {
      return descricao.slice(0, 190) + '...'
    } else if (isLargeScreen && descricao.length > 100) {
      return descricao.slice(0, 190) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} />
      <Infos>
        <TagContainer>{tipo}</TagContainer>
        {destacado === true ? (
          <TagContainer>Destaque da semana</TagContainer>
        ) : null}
      </Infos>
      <BoxInfo>
        <BoxTitulo>
          <div>
            <Titulo>{titulo}</Titulo>
          </div>
          <BoxNota>
            <Nota>{avaliacao}</Nota>
            <img src={imgEstrela} />
          </BoxNota>
        </BoxTitulo>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <BotaoSaibaMais>
          <StyledLink to={`/restaurantes/${id}`}>Saiba mais</StyledLink>
        </BotaoSaibaMais>
      </BoxInfo>
    </Card>
  )
}

export default RestauranteItem
