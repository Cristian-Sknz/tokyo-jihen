import React from 'react';

import { ThemeProvider } from 'styled-components';

import Sides from './components/ui/sides';
import Main from './components/ui/main';
import Footer from './components/ui/footer';
import GridContainer from './components/ui/GridContainer';
import RemoteControlProvider from './components/ui/remote-control/context';
import RemoteControl from './components/ui/remote-control';
import DefaultAppTheme from './styles/theme';
import { GlobalStyle } from './styles';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultAppTheme}>
      <GridContainer>
        <RemoteControlProvider>
          <Sides />
          <Main>
            <Routes />
          </Main>
          <Footer />
          <RemoteControl />
        </RemoteControlProvider>
      </GridContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
