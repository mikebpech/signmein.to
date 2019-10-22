import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Headerbar from './components/Headerbar';
import Sidebar from './components/Sidebar';

import StyledPage from './pages/StyledPage/StyledPage';
import Login from './pages/Login/Login';
import Landing from './pages/Onboarding/Landing';

interface State { 
  mode: String
  noUser: Boolean
}

interface Props {}

//Themes

const containerBgColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const mainAreaBGColor = theme('mode', {
  light: '#F4F6F8;',
  dark: '#000',
});

//App initialization

class App extends React.Component<Props, State> {
  state: State = {
    mode: 'light',
    noUser: true,
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode }}>
        <Container>
          <Headerbar />
          <MainScreen>
          <Router>
              { this.state.noUser ? (
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/onboarding" component={Landing} />
                  <Route exact path="/onboarding/company" component={StyledPage} />
                  <Route exact path="/onboarding/individual" component={StyledPage} />
                </Switch>
              ) : (
                <>
                  <Sidebar />
                    <Switch>
                    <Route path="/" component={StyledPage} />
                    <Route path="/styled" component={StyledPage} />
                  </Switch>
                </>
              )}
            </Router>
          </MainScreen>
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
  display: flex;
  flex-direction: column;
`;

const MainScreen = styled.div`
  display: flex;
  width: 100%; 
  margin-top: 56px;
  height: calc(100% - 56px);
  background-color: ${mainAreaBGColor};
`


