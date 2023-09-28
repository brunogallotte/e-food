import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestaurantesLista'
import RestauranteClass from '../../models/Restaurante'

import imgSushi from '../../assets/images/1.png'
import imgTratoria from '../../assets/images/2.png'

const restaurantes: RestauranteClass[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: imgSushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: imgTratoria,
    infos: ['Italiana']
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: imgTratoria,
    infos: ['Italiana']
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: imgTratoria,
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <RestauranteLista restaurantes={restaurantes} />
    <Footer />
  </>
)

export default Home
