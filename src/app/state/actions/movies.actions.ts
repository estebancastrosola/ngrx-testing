import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MovieModel } from 'src/app/_core/models/movie.model';


export const MoviesActions = createActionGroup({
    source: 'Movies Page',
    events: {
        'Load Movies': emptyProps(),
    },
});
 
export const MoviesApiActions = createActionGroup({
  source: 'Movies API',
  events: {
    'Movies Loaded Success': props<{ movies: MovieModel[] }>(),
  },
});