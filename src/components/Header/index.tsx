import logo from '../../assets/image 1.png'
import * as S from './styles'

const Header = () => (
  <S.Container>
    <img src={logo} alt="logo aluraflix" />
    <S.ButtonHeader title="Clique aqui" type="button">
      Entre em contato
    </S.ButtonHeader>
  </S.Container>
)

export default Header
