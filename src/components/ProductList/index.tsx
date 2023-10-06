import Product from '../Product'
import { Prato } from '../../pages/Home/index'
import { List } from './styles'

export type Props = {
  products: Prato[]
}

const ProductList = ({
  products,
  openModal
}: {
  products: Prato[]
  openModal: (prato: Prato) => void
}) => (
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

export default ProductList
