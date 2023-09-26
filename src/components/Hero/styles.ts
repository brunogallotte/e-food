import styled from 'styled-components'
import { Container, cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;

  img {
    margin-top: 64px;
    margin-bottom: 136px;
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
  color: ${cores.vermelho};
  font-weight: bold;
  line-height: normal;
`
