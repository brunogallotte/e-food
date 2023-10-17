import { useFormik } from 'formik'
import { Button } from '../Product/style'
import { CheckoutContainer, Input } from './styles'
import * as Yup from 'yup'
import { useState } from 'react'

const Checkout = () => {
  const [userAdress, setUserAdress] = useState(false)

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
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const fromAdressIsValid = () => {
    const isValid =
      !form.errors.adress &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number

    if (isValid) {
      setUserAdress(true)
    } else {
      alert('Preencha os dados de entrega corretamente!')
    }
  }

  return (
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
          />
          <small>{getErrorMessage('nameOwner', form.errors.nameOwner)}</small>
          <div className="d-flex">
            <div>
              <label htmlFor="numberOwner">Número do cartão</label>
              <Input
                id="numberOwner"
                type="text"
                value={form.values.numberOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('numberOwner', form.errors.numberOwner)}
              </small>
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
              />
              <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
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
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <Input
                id="expiresYear"
                type="text"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
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
          />
          <small>{getErrorMessage('adress', form.errors.adress)}</small>
          <label htmlFor="city">Cidade</label>
          <Input
            id="city"
            type="text"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getErrorMessage('city', form.errors.city)}</small>
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
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
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
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
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
            <Button>Voltar para o carrinho</Button>
          </div>
        </>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
