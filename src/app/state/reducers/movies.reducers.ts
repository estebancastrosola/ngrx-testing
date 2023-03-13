import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MovieModel } from 'src/app/_core/models/movie.model';
import { MoviesState } from 'src/app/_core/models/moviesState';
import { MoviesActions, MoviesApiActions } from '../actions/movies.actions';

export const moviesAdapter = createEntityAdapter<MovieModel>();

export const initialState:  MoviesState = moviesAdapter.getInitialState({
    loading: false
});

export const moviesReducer = createReducer(
    initialState,
    on(MoviesActions.loadMovies, (state) =>
        {
            return { ...state, loading: true}
        }
    ),
    on(MoviesApiActions.moviesLoadedSuccess, (state, {movies}) => {
        return moviesAdapter.setAll(movies, state)
    }
        
    ),
);

//NGRX ENTITY = https://www.youtube.com/watch?v=3m3GEutSm-s