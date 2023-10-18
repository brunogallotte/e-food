import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vectorImg from '../../assets/images/Vector.svg'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  height: 186px;
  background-image: url(${vectorImg});

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const HeaderText = styled.h4`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: ${colors.red};
`
