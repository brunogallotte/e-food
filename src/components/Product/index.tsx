import { Prato } from '../../pages/Home'

import { useMediaQuery } from 'react-responsive'

import * as S from './style'

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

  const isMobileScreen = useMediaQuery({ maxWidth: 767 })
  const isTabletScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isLargeScreen = useMediaQuery({ minWidth: 1023 })

  const getDescricao = (descricao: string) => {
    if (isMobileScreen && descricao.length > 50) {
      return descricao
    } else if (isTabletScreen && descricao.length > 100) {
      return descricao.slice(0, 270) + '...'
    } else if (isLargeScreen && descricao.length > 100) {
      return descricao
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={foto} />
      <S.ProductTitle>{nome}</S.ProductTitle>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <S.Button onClick={handleOpenModal}>Adicionar ao carrinho</S.Button>
    </S.Card>
  )
}

export default Product
