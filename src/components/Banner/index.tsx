import React from 'react'
import {
  BannerContainer,
  Overlay,
  TextContainer,
  Categoria,
  Titulo,
  BannerImage
} from './styles'
import bannerImg from '../../assets/images/bannerImg.png'

const Banner = () => (
  <BannerContainer>
    <Overlay />
    <TextContainer className="container">
      <Categoria>Italiana</Categoria>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </TextContainer>
    <BannerImage src={bannerImg} alt="Banner" />
  </BannerContainer>
)

export default Banner
