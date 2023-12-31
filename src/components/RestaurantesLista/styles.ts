import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  padding: 80px 0px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
