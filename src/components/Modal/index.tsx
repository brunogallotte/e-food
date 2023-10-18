import close from '../../assets/images/close.png'
import {
  CloseIcon,
  ModalContainer,
  ModalContent,
  Overlay,
  TextBox
} from './style'
import { Prato } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

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
    <ModalContainer>
      <ModalContent className="container">
        <CloseIcon src={close} onClick={closeModal} />
        <img className="imgFood" src={prato.foto} />
        <TextBox>
          <h4>{prato.nome}</h4>
          <p>{prato.descricao}</p>
          <p>{prato.porcao}</p>
          <button onClick={addToCart}>
            Adicionar ao carrinho - {parseToBrl(prato.preco)}
          </button>
        </TextBox>
      </ModalContent>
      <Overlay onClick={closeModal} />
    </ModalContainer>
  )
}
export default Modal
