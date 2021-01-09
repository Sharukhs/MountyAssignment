import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UpCOmmingMovies} from  '../models/UpCOmingMovies';
@Injectable({
  providedIn: 'root'
})
export class UpComingService {

  constructor(private http: HttpClient) { }

  getUpMovies(index){
    return this.http.get<UpCOmmingMovies>('https://api.themoviedb.org/3/movie/upcoming?api_key=89307bb4ca8ad555b1b4dafe18171caf&language=en-US&page='+index+'')
  }
}
