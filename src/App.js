import React from 'react';
import HeaderMutine from './components/HeaderMutine';
import LogoMutinelab from './components/LogoMutine';
import ButtonMutine from './components/ButtonMutine';
import FooterMutine from './components/FoooterMutine';
// import LinkMutine from './components/LinkMutine';
// import HighlighMutine from './components/HighlighMutine';
import LogoImersao from './components/LogoImerssao';
import BannerMutine from './components/BannerMutine';
import TagMutine from './components/TagMutine';
import TitleMutine from './components/TitleMutine';
import DescripitionMutine from './components/DescripitionMutine';



// JSX = (J)AVA (S)CRIPT (X)ML/ PODE ESCREVER HTML DENTRO DO JS.
function App() {
  return (
    <>
      <HeaderMutine>
        <LogoMutinelab />

        <ButtonMutine>Novo Vídeo</ButtonMutine>

      </HeaderMutine>

      <BannerMutine>
        <TagMutine>R6-Rainbow Six</TagMutine>
        <TitleMutine>Circuito Feminino 2020 - Etapa 3 - Playday 2</TitleMutine>
        <DescripitionMutine>Uma bela partidas das meninas, com as melhores estrategias e os melhores narradores!</DescripitionMutine>
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