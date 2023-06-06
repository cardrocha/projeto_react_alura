import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${colors.white};
  position: relative;

  iframe {
    position: absolute;
    top: 240px;
    right: 40px;
    z-index: 1;
    border: 4px solid ${colors.navy_blue};
    border-radius: 4px;
  }
`

export const Content = styled.div`
  button {
    position: absolute;
    top: 292px;
    left: 40px;
    font-size: 40px;
    padding: 8px 10px 8px 10px;
    background-color: ${colors.purple};
    color: ${colors.white};
    border: none;
    border-radius: 4px;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    position: absolute;
    top: 424px;
    left: 40px;
  }

  p {
    width: 600px;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    top: 486px;
    left: 40px;
  }
`
