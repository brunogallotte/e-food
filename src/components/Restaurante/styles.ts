import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  margin-bottom: 48px;
  position: relative;
  height: 398px;

  > img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      min-height: 217px;
    }
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const BoxInfo = styled.div`
  position: relative;
  height: 181px;
  margin-top: -4px;
  padding: 8px;
  border-right: 1px solid #e66767;
  border-bottom: 1px solid #e66767;
  border-left: 1px solid #e66767;
  background-color: ${colors.white};

  @media (max-width: ${breakpoints.desktop}) {
    min-height: 190px;
  }
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
  height: 110px;
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
  position: absolute;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 4px 6px;
  margin-left: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  border: none;
  cursor: pointer;
  bottom: 0;
  left: 0;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkBeige};
`
