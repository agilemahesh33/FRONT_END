import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
htmlURL='https://en.wikipedia.org/wiki/HTML#/media/File:HTML5_logo_and_wordmark.svg';
cssURL='https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png';
javascriptURL='https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png';
bootstrapURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png';
angularURL ='https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg';
CSharpURL='https://e7.pngegg.com/pngimages/520/669/png-clipart-c-logo-c-programming-language-computer-icons-computer-programming-programming-miscellaneous-blue.png';
aspdotNetURL='https://ardalis.com/static/2bcf8d1ec45106e529bb3a6176467a31/c5cb2/aspnetcore-logo.png';
sqlURL='https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg';
}
