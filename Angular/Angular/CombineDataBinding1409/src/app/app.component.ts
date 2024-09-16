//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  txtMovieName = '';
  txtMovieURL = '';
  mn = '';
  mu = '';
  isShow = false;
  ShowMovie()
  {
    this.isShow=true;
    this.txtMovieName = this.mn;
    this.txtMovieURL = this.mu;   
  }
}
