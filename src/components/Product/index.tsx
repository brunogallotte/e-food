import { Button, Card, Description, ProductTitle } from './style'
import { Prato } from '../../pages/Home'

const Product = ({ id, foto, preco, descricao, nome, porcao }: Prato) => (
  <Card>
    <img src={foto} />
    <ProductTitle>{nome}</ProductTitle>
    <Description>{descricao}</Description>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default Product
