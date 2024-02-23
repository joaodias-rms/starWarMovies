import {api} from '../../api/api';
import {MovieResponse} from './types';

export const getMovies = () => {
  return api.get<MovieResponse>(`films/`);
};
