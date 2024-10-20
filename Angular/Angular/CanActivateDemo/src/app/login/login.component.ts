import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route:Router){
  }
  login(){
    localStorage.setItem('token',Math.random().toString());
    this.route.navigate(['/dashboard']);
  }
}
