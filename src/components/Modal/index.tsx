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

type ModalProps = {
  closeModal: () => void
}

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalContent className="container">
        <CloseIcon src={close} onClick={closeModal} />
        <img className="imgFood" src={modalImg} />
        <TextBox>
          <h4>Pizza Marguerita</h4>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. Serve: de 2 a 3 pessoas
          </p>
          <button>Adicionar ao carrinho</button>
        </TextBox>
      </ModalContent>
      <Overlay onClick={closeModal} />
    </ModalContainer>
  )
}
export default Modal
