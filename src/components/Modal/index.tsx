import { useState } from 'react'

import modalImg from '../../assets/images/modal_image.png'
import close from '../../assets/images/close.png'
import {
  CloseIcon,
  ModalContainer,
  ModalContent,
  Overlay,
  TextBox
} from './style'
import { Prato } from '../../pages/Home'

type ModalProps = {
  closeModal: () => void
  prato: Prato
}

const Modal = ({ closeModal, prato }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalContent className="container">
        <CloseIcon src={close} onClick={closeModal} />
        <img className="imgFood" src={prato.foto} />
        <TextBox>
          <h4>{prato.nome}</h4>
          <p>{prato.descricao}</p>
          <button>Adicionar ao carrinho</button>
        </TextBox>
      </ModalContent>
      <Overlay onClick={closeModal} />
    </ModalContainer>
  )
}
export default Modal
