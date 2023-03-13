import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MoviesState } from 'src/app/_core/models/moviesState';
import { AppState } from '../app.state';
import { moviesAdapter } from '../reducers/movies.reducers';
 
export const selectMoviesState = (state: AppState) => state.movies; //Toda la tabla movies

 
const moviesSelectors = moviesAdapter.getSelectors();
 
export const selectMoviesList = createSelector(
  selectMoviesState,
  moviesSelectors.selectAll
);

 
export const selectLoading = createSelector(
    selectMoviesState,
    (state: MoviesState) => state.loading
  );