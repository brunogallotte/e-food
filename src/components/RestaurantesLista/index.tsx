import Restaurante from '../Restaurante'

import { Container, List } from './styles'

import RestauranteClass from '../../models/Restaurante'

export type Props = {
  restaurantes: RestauranteClass[]
}

const RestauranteLista = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            titulo={restaurante.titulo}
            nota={restaurante.nota}
            descricao={restaurante.descricao}
            imagem={restaurante.imagem}
            infos={restaurante.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteLista
