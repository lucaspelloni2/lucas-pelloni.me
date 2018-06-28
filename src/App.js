import React, {Component} from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import './index.css';
import 'react-typist/dist/Typist.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const SubTitle = styled.div`
  margin-top: 2em;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderMsg: false
    };
  }
  onHeaderTyped = () => {
    this.setState({renderMsg: true});
  };

  render() {
    return (
      <Container>
        <Typist
          className="header"
          stdTypingDelay={40}
          avgTypingDelay={150}
          startDelay={200}
          onTypingDone={this.onHeaderTyped}
          cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: false
          }}
        >
          Lucas Pelloni
        </Typist>

        <SubTitle>
          {this.state.renderMsg ? (
            <Typist
              className="subtitle"
              startDelay={200}
              stdTypingDelay={25}
              avgTypingDelay={50}
              cursor={{hideWhenDone: true, show: true}}
            >
              Computer Science Student.
              <Typist.Delay ms={1250} />
              <br />
              Blockchain Passionate.
              <Typist.Delay ms={1250} />
              <br />
              React Lover.
              <Typist.Delay ms={1250} />
            </Typist>
          ) : null}
        </SubTitle>
      </Container>
    );
  }
}

export default App;
