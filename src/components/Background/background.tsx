import React, {ReactNode} from 'react';
import {BackgroundContainer, Title, TitleContainer} from './styles';

interface BackGroundProps {
  children: ReactNode;
}

const Background: React.FC<BackGroundProps> = ({children}) => {
  return (
    <BackgroundContainer>
      <TitleContainer>
        <Title>Star Wars Movies</Title>
      </TitleContainer>
      {children}
    </BackgroundContainer>
  );
};

export default Background;
