import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isActive = true;
  isDisabled = true;
  textColor = 'red'; // or any dynamic color value
  textColor2 = 'blue';
  fontSize = '20px';
}
