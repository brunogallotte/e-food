import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.darkBeige};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 298px;

  > img {
    margin-top: 40px;
  }
`

export const BoxSocials = styled.ul`
  margin-top: 32px;
  margin-bottom: 80px;
  list-style: none;
`

export const SocialsItem = styled.li`
  display: inline-block;
  margin-right: 8px;
`

export const FooterDescription = styled.p`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`
