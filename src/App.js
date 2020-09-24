import React from 'react';
import { HeaderMutine, Wrapper } from './components/HeaderMutine';
import LogoMutinelab from './components/LogoMutine';
import ButtonMutine from './components/ButtonMutine';
import FooterMutine from './components/FoooterMutine';
import LogoImersao from './components/LogoImerssao';
import { BannerMutine, Text } from './components/BannerMutine';
import TagMutine from './components/TagMutine';
import TitleMutine from './components/TitleMutine';
import DescripitionMutine from './components/DescripitionMutine';
import ThumbMutine from './components/ThumbMutine';
import r6feminino from './assets/img/r6feminino.png';
import R6 from './assets/img/r6.png';



// JSX = (J)AVA (S)CRIPT (X)ML/ PODE ESCREVER HTML DENTRO DO JS.
function App() {
  return (
    <>
      <HeaderMutine>
        <Wrapper>
          <LogoMutinelab />

          <ButtonMutine as="a" href="/video/new">Novo Vídeo</ButtonMutine>
        </Wrapper>
      </HeaderMutine>

      <BannerMutine>
        <Text>
          <TagMutine>Rainbow Six</TagMutine>
          <TitleMutine>Circuito Feminino 2020 - Etapa 3 - Playday 1</TitleMutine>
          <DescripitionMutine>O circuito feminino brasileiro de R6!</DescripitionMutine>
        </Text>
        <ThumbMutine
          src={r6feminino}
          alt="Circuito de R6 Feminino"
          title="Circuito Feminino - 2020 - PlayDay 1"
          avatar={R6}
          channelName="R6 e-sport BR"
          timer="04:44:40"
        />
      </BannerMutine>

      <FooterMutine>
        <LogoMutinelab />
        <p>Site feito na <a href="https://www.alura.com.br/"><LogoImersao /></a>
        </p>
      </FooterMutine>
    </>
  );
}

export default App;

// para o codígo limpo é sempre bom usar (caso não seja necessario a div), somente 
// o abre e fecha das tags.