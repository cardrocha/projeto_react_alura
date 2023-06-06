import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  color: ${colors.text};
  width: 1300px;
  height: 350px;
  margin-left: 25px;
  text-align: center;

  iframe {
    margin-left: 5px;
    width: 420px;
    height: 300px;
    border: 4px solid ${colors.border};
    border-radius: 4px;
  }
`
