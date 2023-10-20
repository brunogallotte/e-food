import Product from '../Product'
import { Prato } from '../../pages/Home/index'
import { List } from './styles'
import { useGetRestauranteQuery } from '../../services/api'
import Loader from '../Loader'

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
