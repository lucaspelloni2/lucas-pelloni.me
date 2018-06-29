import React, {Component} from 'react';
import styled from 'styled-components';
import Profile from './Profile';

import './index.css';
import 'react-typist/dist/Typist.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Profile />
      </Container>
    );
  }
}

export default App;
