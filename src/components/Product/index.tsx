import { Button, Card, Description, ProductTitle } from './style'
import { Prato } from '../../pages/Home'

type ProductProps = {
  openModal: (prato: Prato) => void
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
  const handleOpenModal = () => {
    openModal({ id, foto, preco, descricao, nome, porcao })
  }

  return (
    <Card>
      <img src={foto} />
      <ProductTitle>{nome}</ProductTitle>
      <Description>{descricao}</Description>
      <Button onClick={handleOpenModal}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Product
