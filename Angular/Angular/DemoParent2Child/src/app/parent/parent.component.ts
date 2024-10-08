import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
childtext:any;
  public childData($event:any): void{
    this.childtext=$event;
  }
}
