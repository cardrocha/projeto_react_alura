import { createGlobalStyle } from 'styled-components'

export const colors = {
  background: '#000',
  backgroundBody: '#53585D',
  text: '#fff',
  border: '#2A7AE4',
  blueLight: '#4900E0'
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
    background-color: ${colors.background};
  }
`
