import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.vermelho};
  color: ${cores.beje};
  margin-bottom: 32px;

  img {
    width: 304px;
    height: 167px;
  }
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8pg;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  color: ${cores.vermelho};
  padding: 4px;
  background-color: ${cores.bejeEscuro};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`
