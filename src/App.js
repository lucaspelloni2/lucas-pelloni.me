import React, {Component} from 'react';
import styled from 'styled-components';
import Profile from './Profile';

import './index.css';
import 'react-typist/dist/Typist.css';
import Portfolio from './Portfolio';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      onTypingDone: false
    };
  }
  render() {
    return (
      <Container>
        <Profile
          onTypingDone={() => {
            this.setState({typingDone: true});
          }}
        />

        {this.state.typingDone ? <Portfolio /> : null}
      </Container>
    );
  }
}

export default App;
