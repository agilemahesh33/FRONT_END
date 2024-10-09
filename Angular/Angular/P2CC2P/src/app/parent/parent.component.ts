import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) ChildComp!: ChildComponent;
c = 0;
p1=0
IncreamentC(){
  this.c++;
}
ngAfterViewInit(){
  console.log(this.ChildComp.IncreamentP());
  this.p1=this.ChildComp.p;
  this.ChildComp.display();
}
}
