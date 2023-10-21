import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestaurantesLista'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  const listaDeRestaurantes = restaurantes || []

  return (
    <>
      <Hero />
      <RestauranteLista
        isLoading={isLoading}
        restaurantes={listaDeRestaurantes}
      />
      <Footer />
    </>
  )
}

export default Home
