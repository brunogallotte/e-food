import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'
import Restaurante from './components/Restaurante'
import RestauranteLista from './components/RestaurantesLista'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <RestauranteLista />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
