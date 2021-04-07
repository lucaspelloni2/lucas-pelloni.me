import React, {Component} from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import Icon from './Icon';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  left: ${props => (props.typed ? 0 : null)};
  border-right: ${props => (props.typed ? '1px solid rgb(0,0,0,0.25)' : null)};
  top: 0;
  width: 50%;
  height: 100vh;
  transition: 2s ease-in-out;
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

const Me = styled.img`
  width: 220px;
  border-radius: 50%;
  height: auto;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(0, 0, 0, 0.2);
  height: 20px;
  width: 75%;
`;

class Profile extends Component {
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
    this.props.onTypingDone();
  };

  render() {
    return (
      <Container typed={this.state.social}>
        {this.state.social ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {' '}
            <Fade top cascade>
              <Me src="me.jpg" />
            </Fade>
          </div>
        ) : null}
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
          <div>
            <Fade bottom cascade>
              <SubContainer>
                <EmailContainer>
                  <Email
                    href="mailto:lucas.pelloni@axelra.com?Subject=Hi%20Lucas"
                    target="_top"
                  >
                    lucas.pelloni@axelra.com
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
            </Fade>
          </div>
        ) : null}

        {/*{this.state.social ? <div style={{width: '100%'}}><Separator /></div> : null}*/}
      </Container>
    );
  }
}

export default Profile;
