
import { Component } from '@angular/core';
//Service Imported to the component
import { UsersService } from '../users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
staticUsers:any;
APIUsers:any;
constructor(private userService : UsersService){
}
ngOnInit(){
  //calling API method need to subscribe 
  this.userService.getAPIUsers().subscribe(data =>{
    //we can now get individual data that we typecasted it
    //custom error handling
    console.log(data.email + data.name + data.phonenumber);
    this.APIUsers=data;    
  },(err)=>{console.log("Error handling Cannot get data" + err)});  
  this.staticUsers=this.userService.getStaticUsers();
}
}
