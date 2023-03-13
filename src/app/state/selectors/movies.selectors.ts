import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MoviesState } from 'src/app/_core/models/moviesState';
import { AppState } from '../app.state';
 
export const selectMoviesState = (state: AppState) => state.movies; //Toda la tabla movies
 
 
export const selectMoviesList = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.movies
);

 
export const selectLoading = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.loading
  );