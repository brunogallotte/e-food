import React, { useEffect } from 'react'
import { Restaurante } from '../../pages/Home'
import {
  BannerContainer,
  Overlay,
  TextContainer,
  Categoria,
  Titulo,
  BannerImage
} from './styles'

export type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json()
    )
  }, [])

  return (
    <BannerContainer>
      <Overlay />
      <TextContainer className="container">
        <Categoria>{restaurante.tipo}</Categoria>
        <Titulo>{restaurante.titulo}</Titulo>
      </TextContainer>
      <BannerImage src={restaurante.capa} alt="Banner" />
    </BannerContainer>
  )
}

export default Banner
