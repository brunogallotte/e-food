import styled from 'styled-components'
import { breakpoints, Container, colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;

  img {
    margin-top: 64px;
    margin-bottom: 136px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 124px;
    }
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const HeroTitle = styled.h1`
  max-width: 539px;
  font-size: 36px;
  color: ${colors.red};
  font-weight: bold;
  line-height: normal;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 36px;
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    max-width: 80%;
  }
`
