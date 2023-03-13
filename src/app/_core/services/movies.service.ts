import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { MovieModel } from "../models/movie.model";

@Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    constructor () {}
  
    data: MovieModel[] = [
        {
            id: '1',
            title: 'Matrix: Resurrected'
        },
        {
            id: '2',
            title: 'Dune'
        },
        {
            id: '3',
            title: 'The Lord of the Ring'
        },
        {
            id: '4',
            title: 'Interstellar'
        },
        {
            id: '5',
            title: 'Doraemon'
        },
    ]

    getAll() {
      return of(this.data).pipe(
        delay(1500)
      )
    }
  }