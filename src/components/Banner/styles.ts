import styled from 'styled-components'
import bannerImg from '../../assets/images/bannerImg.png'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  position: relative;
  background-image: url(${bannerImg});
  overflow: hidden;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`

export const Categoria = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  font-weight: 100;
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`
