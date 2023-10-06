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
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
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
          <button>Adicionar ao carrinho - {formataPreco(prato.preco)}</button>
        </TextBox>
      </ModalContent>
      <Overlay onClick={closeModal} />
    </ModalContainer>
  )
}
export default Modal
