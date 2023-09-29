import ProductClass from '../../models/Product'
import Product from '../Product'

import { List } from './styles'

export type Props = {
  products: ProductClass[]
}

const ProductList = ({ products }: Props) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </List>
  </div>
)

export default ProductList
