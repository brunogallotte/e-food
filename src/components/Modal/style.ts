import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`
