import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${cores.vermelho};
  color: ${cores.beje};
  font-size: 10px;
  font-weight: bold;
  padding: 6px 4px;
`

export const TagLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.beje};
  font-size: 10px;
  font-weight: bold;
  padding: 6px 4px;
  text-decoration: none;
`
