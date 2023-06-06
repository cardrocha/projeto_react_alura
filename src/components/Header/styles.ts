import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.black};
  border-bottom: 2px solid ${colors.navy_blue};

  button {
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }

  img {
    padding: 26px 40px 26px 40px;
  }
`

export const ButtonHeader = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 10px 8px 10px;
  border: 1px solid ${colors.white};
  background-color: transparent;
  color: ${colors.white};
  margin-right: 40px;
`
