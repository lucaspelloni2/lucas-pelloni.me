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
  height: 100vh;
`;


class App extends Component {


  render() {
    return (
      <Container>
          <Profile />
      </Container>
    );
  }
}

export default App;
