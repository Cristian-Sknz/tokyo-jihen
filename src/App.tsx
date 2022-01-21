import React from 'react';

import { ThemeProvider } from 'styled-components';

import Sides from './components/ui/sides';
import Main from './components/ui/main';
import Footer from './components/ui/footer';
import GridContainer from './components/ui/GridContainer';
import DefaultAppTheme from './styles/theme';
import { GlobalStyle } from './styles';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultAppTheme}>
      <GridContainer>
        <Sides />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </GridContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
