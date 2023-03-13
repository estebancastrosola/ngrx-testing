import { createReducer, on } from '@ngrx/store';
import { MoviesState } from 'src/app/_core/models/moviesState';
import { MoviesActions, MoviesApiActions } from '../actions/movies.actions';

export const initialState:  MoviesState = {
    loading: false,
    movies: []
}

export const moviesReducer = createReducer(
    initialState,
    on(MoviesActions.loadMovies, (state) =>
        {
            return { ...state, loading: true}
        }
    ),
    on(MoviesApiActions.moviesLoadedSuccess, (state, {movies}) =>
        {
            return { ...state, loading: false, movies}
        }
    ),
);