import React from 'react';
import styled from 'styled-components';

const Social = styled.img`
  &:hover {
    transition: 0.5s;
  }
  cursor: pointer;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 0 10px;
`;

const Icon = props => {
  switch (props.icon) {
    case 'github':
      return <Social {...props} src={'github-sign.svg'} />;
    case 'instagram':
      return <Social {...props} src={'instagram.svg'} />;
    case 'linkedin':
      return <Social {...props} src={'linkedin.svg'} />;

    default:
      return <div>default</div>;
  }
};

export default Icon;
