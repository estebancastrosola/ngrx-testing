import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesActions } from '../app/state/actions/movies.actions'
import { selectLoading, selectMoviesList } from './state/selectors/movies.selectors';
import { MovieModel } from './_core/models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-testing';

  loading$: Observable<boolean>| null = null;
  movies$: Observable<readonly MovieModel[]>| null = null;

  constructor(private store: Store<any>){

  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.movies$ = this.store.select(selectMoviesList);
  }

  loadMovies(){
    this.store.dispatch(MoviesActions.loadMovies())
  }
}