import { useGetRestauranteQuery } from '../../services/api'

import Product from '../Product'
import Loader from '../Loader'

import { List } from './styles'

export type Props = {
  products: Prato[]
}

const ProductList = ({
  products,
  openModal,
  id
}: {
  products: Prato[]
  openModal: (prato: Prato) => void
  id: string
}) => {
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            foto={product.foto}
            nome={product.nome}
            descricao={product.descricao}
            preco={product.preco}
            porcao={product.porcao}
            openModal={openModal}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductList
