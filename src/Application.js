import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex; flex-direction: column;
`;
const App = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: rgba(0, 0, 0, 0.05);
  padding: 45px 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin: 55px 20px;
  border-bottom-color: transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  width: 100%;
  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

class Application extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <App>
          <Image src={this.props.app.img} />
          {this.props.children}
        </App>
      </Container>
    );
  }
}

export default Application;
