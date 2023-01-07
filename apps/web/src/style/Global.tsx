import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background: linear-gradient(90deg, #001463, #0235BE, #003FDF, #0235BE, #001463);
    background-repeat: repeat;
    background-position: top;
    position: relative;
    background-size: 100%;

    .noble__background {
      position: fixed;
      min-height: 100vh;
      inset: 0;
      z-index: -2;
      opacity: 0.9;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
