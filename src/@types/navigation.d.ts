import {IMovie} from '../config/functions/Movies/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: undefinded;
      Dashboard: undefinded;
      MovieInfo: {
        movie: IMovie;
      };
    }
  }
}
