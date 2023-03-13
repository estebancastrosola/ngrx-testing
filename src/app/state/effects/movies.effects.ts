import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MoviesService } from 'src/app/_core/services/movies.service';
import { MoviesActions, MoviesApiActions } from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(MoviesActions.loadMovies),
    exhaustMap(() => this.moviesService.getAll()
      .pipe(
        map(movies => (MoviesApiActions.moviesLoadedSuccess({movies}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}