import { useState } from 'react'

import schedule from '../../assets/agenda.jpg'
import closeIcon from '../../assets/fechar.png'

import Button from '../../components/Button'
import background from '../../assets/humberto.jpg'

import * as S from './styles'
import MultipleItems from '../../components/Slider'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <S.ContainerHome>
        <img src={background} alt="fundo" />
        <S.Content>
          <Button
            title="clique aqui"
            type="button"
            onclick={() => setOpenModal(true)}
          >
            Agenda de shows
          </Button>
          <h2>Sobre</h2>
          <p>
            Humberto Gessinger é um cantor, compositor, baixista,
            multi-instrumentista e escritor brasileiro. É especialmente
            conhecido por ter fundado a banda Engenheiros do Hawaii, na qual
            tocou de 1985 até 2008, quando o grupo entrou em uma espécie de
            hiato por tempo indeterminado.
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

      <MultipleItems />

      <S.ModalContainer className={openModal ? 'visible' : ''}>
        <h2>Agenda de Shows</h2>
        <img src={schedule} alt="agenda de shows" />
        <img
          onClick={() => setOpenModal(false)}
          className="IconClose"
          src={closeIcon}
          alt="ícone de fechar"
        />
      </S.ModalContainer>
      {openModal && <S.Overlay onClick={() => setOpenModal(false)} />}
    </>
  )
}

export default Home
