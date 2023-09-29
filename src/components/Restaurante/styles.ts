import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-bottom: 48px;
  position: relative;

  img {
    width: 100%;
    max-height: 217px;
    overflow-y: hidden;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const BoxInfo = styled.div`
  margin-top: -4px;
  padding: 8px;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
`

export const BoxTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  fontsize: 18px;
  font-weight: bold;
  display: block;
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`

export const BoxNota = styled.div`
  display: flex;
  align-items: center;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const BotaoSaibaMais = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.beje};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  border: none;
  margin-top: 16px;
  cursor: pointer;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${cores.bejeEscuro};
`
