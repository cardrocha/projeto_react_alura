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
    z-index: 0;
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
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.purple};
    }
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

export const ModalContainer = styled.div`
  display: none;
  position: absolute;
  top: 190px;
  left: 420px;
  z-index: 2;
  background-color: ${colors.black};
  border: 4px solid ${colors.navy_blue};
  border-radius: 4px;

  &.visible {
    display: block;
  }

  img {
    width: 500px;
  }

  .IconClose {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 0;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`
