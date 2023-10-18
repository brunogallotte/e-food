import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 10px;
  font-weight: bold;
  padding: 6px 4px;
`

export const TagLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.beige};
  font-size: 10px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
