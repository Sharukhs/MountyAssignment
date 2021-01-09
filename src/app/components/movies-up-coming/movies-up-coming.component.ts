import { Component, OnInit } from '@angular/core';
import {UpComingService} from '../../services/up-coming.service';
import { Observable } from 'rxjs';
import {PageEvent} from '@angular/material/paginator';
import {UpCOmmingMovies} from  '../../models/UpCOmingMovies';
@Component({
  selector: 'app-movies-up-coming',
  templateUrl: './movies-up-coming.component.html',
  styleUrls: ['./movies-up-coming.component.css']
})
export class MoviesUpComingComponent implements OnInit {
  public imageHost = 'https://image.tmdb.org/t/p/w500';
  public upComeMovies = [];
  length = 100;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  public pageIndex = 1
  constructor(private upComingService : UpComingService) { }

  ngOnInit(): void {

    this.upComingService.getUpMovies(this.pageIndex).subscribe((data : UpCOmmingMovies)=>{
      console.log(data)
      this.length = data.total_results;
        if(data.results.length > 0){
          this.upComeMovies = data.results;
          console.log( this.upComeMovies);
        }
      })
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  obs: Observable<any>;

  onPaginateChange(event){
    this.pageIndex = event.pageIndex;
    this.pageIndex = this.pageIndex+1;
    this.upComingService.getUpMovies(this.pageIndex).subscribe((data : UpCOmmingMovies)=>{
      if(data.results.length > 0){
        this.upComeMovies = data.results;
        
      }
      else {
        alert('No Data Found')
      }

    })
 
  }

}
