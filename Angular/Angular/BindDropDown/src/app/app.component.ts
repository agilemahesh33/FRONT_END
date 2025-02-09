import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  country="";
  selectedCountry: string ="";
  Countries:string[]= ['India','Germany','US','UK','Africa'];
  firstName = "";
  lastName = "";
}
