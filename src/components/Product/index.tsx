import { Button, Card, Description, ProductTitle } from './style'
import { Prato } from '../../pages/Home'

type ProductProps = {
  openModal: () => void
} & Prato

const Product = ({
  id,
  foto,
  preco,
  descricao,
  nome,
  porcao,
  openModal
}: ProductProps) => {
  return (
    <Card>
      <img src={foto} />
      <ProductTitle>{nome}</ProductTitle>
      <Description>{descricao}</Description>
      <Button onClick={openModal}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Product
