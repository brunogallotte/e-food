import React, { useEffect } from 'react'

import * as S from './styles'

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
    <S.BannerContainer>
      <S.Overlay />
      <S.TextContainer className="container">
        <S.Categoria>{restaurante.tipo}</S.Categoria>
        <S.Titulo>{restaurante.titulo}</S.Titulo>
      </S.TextContainer>
      <S.BannerImage src={restaurante.capa} alt="Banner" />
    </S.BannerContainer>
  )
}

export default Banner
