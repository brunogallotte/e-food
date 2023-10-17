import { Button } from '../Product/style'
import { CheckoutContainer } from './styles'

const Checkout = () => (
  <CheckoutContainer>
    <h3>Entrega</h3>
    <label>Endereço</label>
    <input type="text" />
    <label>Cidade</label>
    <input type="text" />
    <div className="d-flex">
      <div>
        <label>CEP</label>
        <input type="text" />
      </div>
      <div>
        <label>Número</label>
        <input type="text" />
      </div>
    </div>
    <label>Complemento (opcional)</label>
    <input type="text" />
    <div className="button-container">
      <Button>Continuar com o pagamento</Button>
      <Button>Voltar para o carrinho</Button>
    </div>
  </CheckoutContainer>
)

export default Checkout
