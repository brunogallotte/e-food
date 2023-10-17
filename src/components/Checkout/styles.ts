import styled from 'styled-components'
import { cores } from '../../styles'
import { Button } from '../Product/style'

export const CheckoutContainer = styled.form`
  color: ${cores.bejeEscuro};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: ${cores.bejeEscuro};
    border: none;
    height: 32px;
  }

  ${Button} {
    margin-bottom: 8px;
  }

  .d-flex {
    display: flex;
    gap: 32px;
  }

  .button-container {
    margin-top: 16px;
  }
`
