import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {IMovie} from '../config/functions/Movies/types';
import {getMovies} from '../config/functions/Movies/movies';

interface IMovieContextData {
  movies: IMovie[];
}
interface IMainProps {
  children: ReactNode;
}

const MovieContext = createContext<IMovieContextData>({} as IMovieContextData);

const MovieProvider = ({children}: IMainProps) => {
  const [movies, setMovies] = useState<IMovie[]>([] as IMovie[]);

  const fetchMovies = () => {
    getMovies()
      .then(response => response.data)
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{movies}}>{children}</MovieContext.Provider>
  );
};

function useMovie() {
  return useContext(MovieContext);
}

export {MovieProvider, useMovie};
