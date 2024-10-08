import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
c = 0;
p1=0
IncreamentC(){
  this.c++;
}
ngAfterViewInit(){
  console.log(this.childComponent.p);
  this.p1=this.childComponent.p;
  this.childComponent.display();
}
}
