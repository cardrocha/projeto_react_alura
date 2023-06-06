import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
  border-top: 2px solid ${colors.navy_blue};

  img {
    padding: 20px 0 60px 0;
  }
`
