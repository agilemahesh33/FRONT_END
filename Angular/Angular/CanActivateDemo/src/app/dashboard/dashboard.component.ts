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
  Logout(){
    const confirmation = confirm('Do you want to Logout?');
    if(confirmation){
      this.router.navigate(['login']);
      localStorage.clear();
  }
  }
}
