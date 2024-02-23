import React from 'react';
import MovieCard from '../../components/MovieCard/movieCard';
import {useMovie} from '../../hooks/movies';
import {FlatList} from 'react-native';
import {Container, Title, TitleContainer} from './styles';
import LogoutButton from '../../components/SmallButton/logoutButton';
import {useAuth} from '../../hooks/auth';
import {IMovie} from '../../config/functions/Movies/types';
import {useNavigation} from '@react-navigation/native';
import theme from '../../theme';
import Icon from '../../assets/Logout.svg';
const ep4Thumb = require('../../assets/ep4.png');

const DashBoard: React.FC = () => {
  const {movies} = useMovie();
  const {Logout} = useAuth();
  const {navigate} = useNavigation();

  const openMovie = (movie: IMovie) => {
    navigate('MovieInfo', {
      movie,
    });
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Star Wars Movies</Title>
        <LogoutButton
          color={theme.colors.slate._50}
          onPress={Logout}
          icon={<Icon />}
        />
      </TitleContainer>
      <FlatList
        data={movies}
        showsVerticalScrollIndicator={false}
        renderItem={movie => (
          <MovieCard
            handleOpenMovie={() => openMovie(movie.item)}
            thumb={movie.item.episode_id === 4 ? ep4Thumb : ''}
            title={movie.item.title}
            director={movie.item.director}
            yearOfRelease={String(
              new Date(movie.item.release_date).getFullYear(),
            )}
          />
        )}
      />
    </Container>
  );
};

export default DashBoard;
