import Restaurante from '../Restaurante'

import { Container, List } from './styles'

const RestauranteLista = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurante
          titulo="Hioki Sushi"
          nota="4.9"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          imagem="//placehold.it/472x217"
          infos={['Destaque da semana', 'Japonesa']}
        />
        <Restaurante
          titulo="Hioki Sushi"
          nota="4.9"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          imagem="//placehold.it/472x217"
          infos={['Japonesa']}
        />
        <Restaurante
          titulo="Hioki Sushi"
          nota="4.9"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          imagem="//placehold.it/472x217"
          infos={['Japonesa']}
        />
        <Restaurante
          titulo="Hioki Sushi"
          nota="4.9"
          descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          imagem="//placehold.it/472x217"
          infos={['Japonesa']}
        />
      </List>
    </div>
  </Container>
)

export default RestauranteLista
