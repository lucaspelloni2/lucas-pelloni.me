import React, {Component} from 'react';
import styled from 'styled-components';
import applications from './Applications';
import Application from './Application';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 50%;
  top: 0;
  left: 50%;
`;

const Title = styled.h1`
  text-align: center;
`;
const ApplicationContainer = styled.div``;
class Portfolio extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <Title>My Projects</Title>

        <ApplicationContainer>
          {applications.map(app => {
            return <Application app={app}>{app.description}</Application>;
          })}
        </ApplicationContainer>
      </Container>
    );
  }
}

export default Portfolio;
