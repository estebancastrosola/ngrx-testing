import { MovieModel } from "./movie.model";

export interface MoviesState{
    loading: boolean;
    movies: ReadonlyArray<MovieModel>
}