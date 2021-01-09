import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mount-movies';
  selectedOption = 'top_rated';
  movieType(data){
this.selectedOption = data;
  }
}
