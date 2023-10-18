import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.red};
  color: ${colors.beige};
  margin-bottom: 32px;

  img {
    width: 304px;
    height: 167px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8pg;
`

export const Description = styled.p`
  height: 176px;
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  color: ${colors.red};
  padding: 4px;
  background-color: ${colors.darkBeige};
  font-weight: bold;
  border: none;
  width: 100%;
  cursor: pointer;
`
