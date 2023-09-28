import styled from 'styled-components'
import vectorImg from '../../assets/images/Vector.svg'

export const HeaderContainer = styled.div`
  display: flex;
  height: 186px;
  background-image: url(${vectorImg});

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderText = styled.h4`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`
