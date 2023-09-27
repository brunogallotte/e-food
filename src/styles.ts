import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  beje: '#FFF8F2',
  branca: '#FFF',
  vermelho: '#E66767',
  bejeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.beje};
    color: ${cores.vermelho};

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
