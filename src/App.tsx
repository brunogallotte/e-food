import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import LaDolce from './pages/LaDolce'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/ladolce',
    element: <LaDolce />
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
