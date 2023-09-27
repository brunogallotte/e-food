import { TagContainer } from '../Tag/styles'

import {
  BoxInfo,
  BoxNota,
  BoxTitulo,
  Card,
  Descricao,
  Nota,
  Titulo
} from './styles'
import imgEstrela from '../../assets/images/estrela.svg'

const Restaurante = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <BoxInfo>
      <BoxTitulo>
        <div>
          <Titulo>Nome do restaurante</Titulo>
        </div>
        <BoxNota>
          <Nota>4.9</Nota>
          <img src={imgEstrela} />
        </BoxNota>
      </BoxTitulo>
      <TagContainer>Destaque da semana</TagContainer>
      <TagContainer>Japonesa</TagContainer>
      <Descricao>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        magnam vitae odio quasi laudantium magni sed modi veniam fugiat harum
        saepe expedita at rem id quibusdam maiores, quas enim ab.
      </Descricao>
    </BoxInfo>
  </Card>
)

export default Restaurante
