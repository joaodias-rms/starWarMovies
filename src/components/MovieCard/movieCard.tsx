import React from 'react';

import {
  CardContainer,
  Container,
  MovieDirector,
  MovieInfosContainer,
  MovieThumb,
  MovieTitle,
  YearRelease,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface MovieProps {
  title: string;
  director: string;
  yearOfRelease: string;
  thumb?: string;
  handleOpenMovie: () => void;
}

const MovieCard: React.FC<MovieProps> = ({
  director,
  title,
  thumb,
  yearOfRelease,
  handleOpenMovie,
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={handleOpenMovie}>
      <Container>
        {!!thumb && <MovieThumb source={require('../../assets/ep4.png')} />}
        <CardContainer>
          <MovieTitle>{title}</MovieTitle>
          <MovieInfosContainer>
            <MovieDirector>{director}</MovieDirector>
            <YearRelease>{yearOfRelease}</YearRelease>
          </MovieInfosContainer>
        </CardContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default MovieCard;
