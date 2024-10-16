import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router:Router){
  }
  logout(){
    const confirmation = confirm('Do You want to logout');
    if(confirmation){
      this.router.navigate(['logout']);
    }
  }
}
