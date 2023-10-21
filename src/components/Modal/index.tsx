import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'

import close from '../../assets/images/close.png'
import * as S from './style'

type ModalProps = {
  closeModal: () => void
  prato: Prato
}

const Modal = ({ closeModal, prato }: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
    closeModal()
  }

  return (
    <S.ModalContainer>
      <S.ModalContent className="container">
        <S.CloseIcon src={close} onClick={closeModal} />
        <img className="imgFood" src={prato.foto} />
        <S.TextBox>
          <h4>{prato.nome}</h4>
          <p>{prato.descricao}</p>
          <p>{prato.porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - {parseToBrl(prato.preco)}
          </button>
        </S.TextBox>
      </S.ModalContent>
      <S.Overlay onClick={closeModal} />
    </S.ModalContainer>
  )
}
export default Modal
