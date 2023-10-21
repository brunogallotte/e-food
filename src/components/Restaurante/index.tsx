import { TagContainer } from '../Tag/styles'
import { useMediaQuery } from 'react-responsive'

import { Restaurante } from '../../pages/Home'

import imgEstrela from '../../assets/images/estrela.svg'

import * as S from './styles'

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
      return descricao.slice(0, 120) + '...'
    } else if (isLargeScreen && descricao.length > 100) {
      return descricao.slice(0, 190) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={capa} />
      <S.Infos>
        <TagContainer>{tipo}</TagContainer>
        {destacado === true ? (
          <TagContainer>Destaque da semana</TagContainer>
        ) : null}
      </S.Infos>
      <S.BoxInfo>
        <S.BoxTitulo>
          <div>
            <S.Titulo>{titulo}</S.Titulo>
          </div>
          <S.BoxNota>
            <S.Nota>{avaliacao}</S.Nota>
            <img src={imgEstrela} />
          </S.BoxNota>
        </S.BoxTitulo>
        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <S.BotaoSaibaMais>
          <S.StyledLink to={`/restaurantes/${id}`}>Saiba mais</S.StyledLink>
        </S.BotaoSaibaMais>
      </S.BoxInfo>
    </S.Card>
  )
}

export default RestauranteItem
