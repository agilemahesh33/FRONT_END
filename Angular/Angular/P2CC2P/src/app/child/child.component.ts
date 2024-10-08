import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() parentCount!:number;
p=0;
IncreamentP() : number
{
  return this.p++;
}
display(){
  alert("I am Found Child");
}
}
