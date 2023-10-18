import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Product/style'

type InputProps = {
  maxWidth?: string
}

export const CheckoutContainer = styled.form`
  color: ${colors.darkBeige};

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

  small {
    display: block;
    margin-bottom: 8px;
    color: ${colors.white};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Input = styled.input<InputProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${colors.darkBeige};
  border: none;
  height: 32px;
`
