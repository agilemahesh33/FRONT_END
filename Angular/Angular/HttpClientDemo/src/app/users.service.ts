//users.service.ts
import { Injectable } from '@angular/core';
//import HttpClient from @angular/common/http
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

//Created interface for making type
interface User{
  name:string,
  email: string,
  phonenumber: number
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Users:any;
//create instance of HttpClient
  constructor(private http:HttpClient) { 
  }
  getStaticUsers(){
this.Users=[
      {userID:10,userName:'Youtube'},
      {userID:20,userName:'Twitter'},
      {userID:30,userName:'Facebook'},
      {userID:40,userName:'Instagram'},
      {userID:50,userName:'LinkedIn'}
    ];
    //console.log(this.Users);
    return this.Users;
  }
  getAPIUsers():Observable<User>{
    //we need to pass the url into get() URL paramter is mandatory other are optional
    //set Http headers using following way 
    const _headers = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'123456789'
    });
    //set Http Parameters using following way
    const _params = new HttpParams()
    .set('PageNum','10')
    .set('PageSize','100');
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users",{headers :_headers, params:_params});
  }
}
