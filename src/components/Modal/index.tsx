import modalImg from '../../assets/images/modal_image.png'
import { ModalContainer, ModalContent, TextBox } from './style'

const Modal = () => (
  <ModalContainer>
    <ModalContent className="container">
      <img src={modalImg} />
      <TextBox>
        <h4>Pizza Marguerita</h4>
        <p>
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião. Serve: de 2 a 3
          pessoas
        </p>
        <button>Adicionar ao carrinho</button>
      </TextBox>
    </ModalContent>
  </ModalContainer>
)

export default Modal