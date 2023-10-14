import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestaurantesLista'

import { useGetRestaurantesQuery } from '../../services/api'

export interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  const listaDeRestaurantes = restaurantes || []

  return (
    <>
      <Hero />
      <RestauranteLista restaurantes={listaDeRestaurantes} />
      <Footer />
    </>
  )
}

export default Home
