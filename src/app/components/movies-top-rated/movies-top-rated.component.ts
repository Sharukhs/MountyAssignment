import { Component, OnInit } from '@angular/core';
import {TopRatedService} from '../../services/top-rated.service';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';
import {TopRatedMovies} from  '../../models/topRatedMovies';
@Component({
  selector: 'app-movies-top-rated',
  templateUrl: './movies-top-rated.component.html',
  styleUrls: ['./movies-top-rated.component.css']
})
export class MoviesTopRatedComponent implements OnInit {
public imageHost = 'https://image.tmdb.org/t/p/w500';
  public topRatesMovies = [];
  length = 100;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  public pageIndex = 1

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  obs: Observable<any>;
  constructor(private topRatedService : TopRatedService) { }

  ngOnInit(): void {
    this.topRatedService.getTopRatedMovies(this.pageIndex).subscribe((data : TopRatedMovies)=>{

    
    this.length = data.total_results;
      if(data.results.length > 0){
        this.topRatesMovies = data.results;
      
      }
    })
  }

  onPaginateChange(event){
    this.pageIndex = event.pageIndex;
    this.pageIndex = this.pageIndex+1;
    this.topRatedService.getTopRatedMovies(this.pageIndex).subscribe((data : TopRatedMovies)=>{
      if(data.results.length > 0){
        this.topRatesMovies = data.results;
        
      }
      else {
        alert('No Data Found')
      }

    })
 
  }

}
