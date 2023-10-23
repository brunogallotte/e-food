import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../services/api'

import InputMask from 'react-input-mask'

import { Button } from '../Product/style'
import { CheckoutContainer, InputGroup } from './styles'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  const [userAdress, setUserAdress] = useState(false)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      adress: '',
      city: '',
      cep: '',
      number: '',
      adressComplement: '',
      nameOwner: '',
      numberOwner: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      adress: Yup.string()
        .min(5, 'Endereço inválido!')
        .required('Campo obrigatório!'),
      city: Yup.string()
        .min(5, 'Cidade inválida!')
        .required('Campo obrigatório!'),
      cep: Yup.string().min(5, 'Cep inválido!').required('Campo obrigatório!'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Campo obrigatório!'),
      nameOwner: Yup.string()
        .min(5, 'Nome inválido')
        .required('Campo obrigatório!'),
      numberOwner: Yup.string()
        .min(16, 'Cartão inválido')
        .required('Campo obrigatório!'),
      cardCode: Yup.string()
        .min(2, 'CVV inválido!')
        .required('Campo obrigatório!'),
      expiresMonth: Yup.string()
        .min(2, 'Mês inválido!')
        .required('Campo obrigatório!'),
      expiresYear: Yup.string()
        .min(2, 'Ano inválido')
        .required('Campo obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nameOwner,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.adressComplement
          }
        },
        payment: {
          card: {
            name: values.nameOwner,
            number: values.numberOwner,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const fromAdressIsValid = () => {
    const isValid =
      !form.errors.adress &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.touched.adress

    if (isValid) {
      setUserAdress(true)
    } else {
      alert('Preencha os dados de entrega corretamente!')
    }
  }

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return !isSuccess ? (
    <CheckoutContainer onSubmit={form.handleSubmit}>
      {userAdress ? (
        <>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <InputGroup>
            <label htmlFor="nameOwner">Nome no cartão</label>
            <input
              id="nameOwner"
              type="text"
              value={form.values.nameOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('nameOwner') ? 'error' : ''}
            />
          </InputGroup>
          <div className="d-flex">
            <InputGroup>
              <label htmlFor="numberOwner">Número do cartão</label>
              <InputMask
                id="numberOwner"
                type="text"
                value={form.values.numberOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('numberOwner') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </InputGroup>
            <InputGroup maxWidth="87px">
              <label htmlFor="cardCode">CVV</label>
              <InputMask
                id="cardCode"
                type="text"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('cardCode') ? 'error' : ''}
                mask="999"
              />
            </InputGroup>
          </div>
          <div className="d-flex">
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                id="expiresMonth"
                type="text"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                id="expiresYear"
                type="text"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('expiresYear') ? 'error' : ''}
                mask="99"
              />
            </InputGroup>
          </div>
          <div className="button-container">
            <Button type="submit">
              {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
            </Button>
            <Button onClick={() => setUserAdress(false)}>
              Voltar para edição de endereço
            </Button>
          </div>
        </>
      ) : (
        <>
          <h3>Entrega</h3>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              id="adress"
              type="text"
              name="adress"
              value={form.values.adress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('adress') ? 'error' : ''}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkoutInputHasError('city') ? 'error' : ''}
            />
          </InputGroup>
          <div className="d-flex">
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('cep') ? 'error' : ''}
                mask="99999-999"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('number') ? 'error' : ''}
              />
            </InputGroup>
          </div>
          <InputGroup>
            <label htmlFor="adressComplement">Complemento (opcional)</label>
            <input
              id="adressComplement"
              type="text"
              name="adressComplement"
              value={form.values.adressComplement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
          <div className="button-container">
            <Button onClick={() => fromAdressIsValid()}>
              Continuar com o pagamento
            </Button>
            <Button onClick={() => setPayment(false)}>
              Voltar para o carrinho
            </Button>
          </div>
        </>
      )}
    </CheckoutContainer>
  ) : (
    <CheckoutContainer>
      <h3>Pedido Realizado - {data.orderId}</h3>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button>Concluir</Button>
    </CheckoutContainer>
  )
}

export default Checkout
