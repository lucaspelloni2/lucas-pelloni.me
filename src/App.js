import React, {Component} from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import Icon from './Icon';
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

const EmailContainer = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0, 0.2);
  margin-top: 2em;
  height: 60px;
`;

const Email = styled.a`
  text-decoration: none;
`;

const SubContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderMsg: false,
      social: false
    };
  }
  onHeaderTyped = () => {
    this.setState({renderMsg: true});
  };

  showSocialMedia = () => {
    this.setState({social: true});
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
              onTypingDone={this.showSocialMedia}
              cursor={{hideWhenDone: false, show: true}}
            >
              Computer Science Student.
              <Typist.Delay ms={700} />
              <br />
              Blockchain Passionate.
              <Typist.Delay ms={700} />
              <br />
              React Lover.
              <Typist.Delay ms={700} />
            </Typist>
          ) : null}
        </SubTitle>
        {this.state.social ? (
          <SubContainer>
            <EmailContainer>
              <Email
                href="mailto:lucas@sciencematters.io?Subject=Hi%20Lucas"
                target="_top"
              >
                lucas.pelloni@sciencematters.io
              </Email>
            </EmailContainer>

            <SubTitle>
              <a href="https://github.com/lucaspelloni2" target="_blank">
                <Icon icon={'github'} width={45} height={45} />
              </a>

              <a
                href="https://www.instagram.com/lucas.pelloni/"
                target="_blank"
              >
                <Icon icon={'instagram'} width={45} height={45} />
              </a>

              <a href="https://www.linkedin.com/in/lucas-pelloni-980729133/">
                <Icon icon={'linkedin'} width={45} height={45} />
              </a>
            </SubTitle>
          </SubContainer>
        ) : null}
      </Container>
    );
  }
}

export default App;
