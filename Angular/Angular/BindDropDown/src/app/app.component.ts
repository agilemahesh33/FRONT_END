import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  country="";
  selectedCountry="";
  Countries= ['India','Germany','US','UK','Africa'];
  firstName = "";
  lastName = "";
}
