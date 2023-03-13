import { EntityState } from "@ngrx/entity";
import { MovieModel } from "./movie.model";

export interface MoviesState extends EntityState<MovieModel>{
    loading: boolean
};