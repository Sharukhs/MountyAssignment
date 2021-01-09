import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TopRatedMovies} from  '../models/topRatedMovies';
@Injectable({
  providedIn: 'root'
})
export class TopRatedService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(index){
    return this.http.get<TopRatedMovies>('https://api.themoviedb.org/3/movie/top_rated?api_key=89307bb4ca8ad555b1b4dafe18171caf&language=en-US&page='+index+'')
  }
}
