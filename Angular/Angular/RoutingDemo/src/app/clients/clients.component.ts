import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  clientList = [
    {clientId : 11, firstName:'Mahesh',lastName:'Raut'},
    {clientId : 22, firstName:'Ganesh',lastName:'Jadhav'},
    {clientId : 33, firstName:'Suresh',lastName:'Borchate'},
    {clientId : 44, firstName:'Bhavesh',lastName:'Kulkarni'},
    {clientId : 55, firstName:'Ritesh',lastName:'Borhade'},
    {clientId : 66, firstName:'Haresh',lastName:'Tikone'},
    {clientId : 77, firstName:'Vignesh',lastName:'Panchal'}
  ]
  constructor(){}
}
