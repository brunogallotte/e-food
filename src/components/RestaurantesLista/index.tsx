import Restaurante from '../Restaurante'

import { Container, List } from './styles'

const RestauranteLista = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
      </List>
    </div>
  </Container>
)

export default RestauranteLista
