import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestauranteLista from '../../components/RestaurantesLista'
import { useEffect, useState } from 'react'

// const restaurantes: RestauranteClass[] = [
//   {
//     id: 1,
//     titulo: 'Hioki Sushi',
//     nota: '4.9',
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     imagem: imgSushi,
//     infos: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     titulo: 'La Dolce Vita Trattoria',
//     nota: '4.6',
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     imagem: imgTratoria,
//     infos: ['Italiana']
//   },
//   {
//     id: 3,
//     titulo: 'La Dolce Vita Trattoria',
//     nota: '4.6',
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     imagem: imgTratoria,
//     infos: ['Italiana']
//   },
//   {
//     id: 4,
//     titulo: 'La Dolce Vita Trattoria',
//     nota: '4.6',
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     imagem: imgTratoria,
//     infos: ['Italiana']
//   }
// ]

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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <RestauranteLista restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
