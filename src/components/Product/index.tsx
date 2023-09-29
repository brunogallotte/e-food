import { Button, Card, Description, ProductTitle } from './style'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} />
    <ProductTitle>{title}</ProductTitle>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default Product
