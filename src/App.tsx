import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import Headerbar from './components/Headerbar';

interface State { 
  mode: String
}

interface Props {}

//Themes

const containerBgColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

class App extends React.Component<Props, State> {
  state: State = {
    mode: 'light'
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode }}>
        <Container>
          <Headerbar />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

//Styles

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${containerBgColor};
`;


