import { Restaurante } from '../../pages/Home'
import Loader from '../Loader'
import RestauranteItem from '../Restaurante'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
  isLoading: boolean
}

const RestauranteLista = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <RestauranteItem
              key={restaurante.id}
              id={restaurante.id}
              titulo={restaurante.titulo}
              avaliacao={restaurante.avaliacao}
              descricao={restaurante.descricao}
              capa={restaurante.capa}
              tipo={restaurante.tipo}
              destacado={restaurante.destacado}
              cardapio={restaurante.cardapio}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestauranteLista
