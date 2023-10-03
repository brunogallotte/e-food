import { TagContainer } from '../Tag/styles'

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
}: Restaurante) => (
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
      <Descricao>{descricao}</Descricao>
      <BotaoSaibaMais>
        <StyledLink to={`/restaurantes/${id}`}>Saiba mais</StyledLink>
      </BotaoSaibaMais>
    </BoxInfo>
  </Card>
)

export default RestauranteItem
