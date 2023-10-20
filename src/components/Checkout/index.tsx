import { useFormik } from 'formik'
import { Button } from '../Product/style'
import { CheckoutContainer, Input } from './styles'
import * as Yup from 'yup'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  const [userAdress, setUserAdress] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
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
          <label htmlFor="nameOwner">Nome no cartão</label>
          <Input
            id="nameOwner"
            type="text"
            value={form.values.nameOwner}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkoutInputHasError('nameOwner') ? 'error' : ''}
          />
          <div className="d-flex">
            <div>
              <label htmlFor="numberOwner">Número do cartão</label>
              <Input
                id="numberOwner"
                type="text"
                value={form.values.numberOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('numberOwner') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="cardCode">CVV</label>
              <Input
                id="cardCode"
                type="text"
                maxWidth="87px"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('cardCode') ? 'error' : ''}
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <Input
                id="expiresMonth"
                type="text"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('expiresMonth') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <Input
                id="expiresYear"
                type="text"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('expiresYear') ? 'error' : ''}
              />
            </div>
          </div>
          <div className="button-container">
            <Button type="submit">Finalizar pagamento</Button>
            <Button onClick={() => setUserAdress(false)}>
              Voltar para edição de endereço
            </Button>
          </div>
        </>
      ) : (
        <>
          <h3>Entrega</h3>
          <label htmlFor="adress">Endereço</label>
          <Input
            id="adress"
            type="text"
            name="adress"
            value={form.values.adress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkoutInputHasError('adress') ? 'error' : ''}
          />
          <label htmlFor="city">Cidade</label>
          <Input
            id="city"
            type="text"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkoutInputHasError('city') ? 'error' : ''}
          />
          <div className="d-flex">
            <div>
              <label htmlFor="cep">CEP</label>
              <Input
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('cep') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <Input
                id="number"
                type="text"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('number') ? 'error' : ''}
              />
            </div>
          </div>
          <label htmlFor="adressComplement">Complemento (opcional)</label>
          <Input
            id="adressComplement"
            type="text"
            name="adressComplement"
            value={form.values.adressComplement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
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
