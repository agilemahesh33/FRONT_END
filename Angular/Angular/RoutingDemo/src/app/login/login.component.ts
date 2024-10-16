import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
//import Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){

  }
  login()
  {
    //Temp storage of token random number at local storage
    localStorage.setItem('token',Math.random().toString());
    this.router.navigate(['dashboard']);
  }
}
