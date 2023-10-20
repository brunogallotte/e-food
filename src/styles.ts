import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  beige: '#FFF8F2',
  white: '#FFF',
  red: '#E66767',
  darkBeige: '#FFEBD9',
  lightRed: '#f5a9a9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.beige};
    color: ${colors.red};

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.desktop}) {
        max-width: 80%;
      }
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
