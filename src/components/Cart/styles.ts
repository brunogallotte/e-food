import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  @media (max-width: 376px) {
    max-width: 75%;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px;
  position: relative;
  background-color: ${colors.darkBeige};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .button-img {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 0;
    right: 0;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
  }
`

export const OrderBox = styled.div`
  color: ${colors.darkBeige};
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`
