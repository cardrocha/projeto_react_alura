import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  gray: '#53585D',
  white: '#fff',
  navy_blue: '#2A7AE4',
  purple: '#4900E0'
}

export const StyleGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.black};
  }
`
