import React from 'react';
import {
  Container,
  GoBackContainer,
  MovieContainer,
  MovieDirector,
  MovieImage,
  MovieOpeningCrawl,
  MovieTitle,
  MovieTopContainer,
  MovieYearRelease,
  Title,
  TitleContainer,
} from './styles';
import {useAuth} from '../../hooks/auth';
import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Icon from '../../assets/Logout.svg';
import theme from '../../theme';
import {images} from '../../theme/imgs';
import SmallButton from '../../components/SmallButton/logoutButton';

const MovieInfo: React.FC = ({route}) => {
  const {movie} = route.params;
  const movieThumb = images.filter(image => image.id === movie.episode_id);
  const {Logout} = useAuth();
  const {goBack} = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Star Wars Movies</Title>
        <SmallButton
          color={theme.colors.slate._50}
          onPress={Logout}
          icon={<Icon />}
        />
      </TitleContainer>
      <MovieImage source={movieThumb[0].ep} />
      <MovieContainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieTopContainer>
          <MovieDirector>{movie.director}</MovieDirector>
          <MovieYearRelease>
            {String(new Date(movie.release_date).getFullYear())}
          </MovieYearRelease>
        </MovieTopContainer>
        <MovieOpeningCrawl>{String(movie.opening_crawl).replace(/\n/g, '')}</MovieOpeningCrawl>
      </MovieContainer>
      <GoBackContainer>
        <SmallButton
          onPress={handleGoBack}
          color={theme.colors.slate._900}
          icon={
            <Feather
              name="arrow-left"
              size={24}
              color={theme.colors.slate._50}
            />
          }
        />
      </GoBackContainer>
    </Container>
  );
};

export default MovieInfo;
