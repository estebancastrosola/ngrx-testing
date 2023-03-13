import { ActionReducerMap } from "@ngrx/store";
import { MoviesState } from "../_core/models/moviesState";
import { moviesReducer } from "./reducers/movies.reducers";

export interface AppState {
    movies: MoviesState 
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    movies: moviesReducer
}