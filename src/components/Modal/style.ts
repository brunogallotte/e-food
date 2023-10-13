import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
  position: relative;
  display: flex;
  padding: 32px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }

  .imgFood {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 16px;
    }
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

export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: ${cores.beje};
    color: ${cores.vermelho};
    width: 218px;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
`
