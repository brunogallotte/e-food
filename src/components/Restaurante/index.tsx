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
  Titulo
} from './styles'

import imgEstrela from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  nota: string
  infos: string[]
  imagem: string
  descricao: string
}

const Restaurante = ({ titulo, nota, infos, imagem, descricao }: Props) => (
  <Card>
    <img src={imagem} />
    <Infos>
      {infos.map((info) => (
        <TagContainer key={info}>{info}</TagContainer>
      ))}
    </Infos>
    <BoxInfo>
      <BoxTitulo>
        <div>
          <Titulo>{titulo}</Titulo>
        </div>
        <BoxNota>
          <Nota>{nota}</Nota>
          <img src={imgEstrela} />
        </BoxNota>
      </BoxTitulo>
      <Descricao>{descricao}</Descricao>
      <BotaoSaibaMais>Saiba mais</BotaoSaibaMais>
    </BoxInfo>
  </Card>
)

export default Restaurante
