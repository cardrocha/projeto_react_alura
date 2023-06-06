import Button from '../../components/Button'
import background from '../../assets/humberto.jpg'
import * as S from './styles'

const Home = () => (
  <S.ContainerHome>
    <img src={background} alt="fundo" />
    <S.Content>
      <Button type="button">Humberto Gessinger</Button>
      <h2>Sobre</h2>
      <p>
        Humberto Gessinger é um cantor, compositor, baixista,
        multi-instrumentista e escritor brasileiro. É especialmente conhecido
        por ter fundado a banda Engenheiros do Hawaii, na qual tocou de 1985 até
        2008, quando o grupo entrou em uma espécie de hiato por tempo
        indeterminado.
      </p>
    </S.Content>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/oLWyMIoFZiE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </S.ContainerHome>
)

export default Home

// style={{ backgroundImage: `url(${background})` }}
