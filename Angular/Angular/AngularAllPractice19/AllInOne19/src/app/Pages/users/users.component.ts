import { Component, inject, OnInit } from '@angular/core';
import { User, UserServiceService } from '../../Services/user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User [] = [];

  userService = inject(HttpClient);  //new way form angular 15
  
  //Avoid injecting User service in Constrouctor
  //constructor(private userService : UserServiceService){}
  ngOnInit(): void {

    //Fetching Data from User defined service UserServiceService
    // this.userService.getUsers().subscribe(data => {
    // this.users = data;
    // console.log(this.users);
    this.GetUSer();

  }
  //Direct call from component
  GetUSer() {
    this.userService.get("https://jsonplaceholder.typicode.com/users").subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
