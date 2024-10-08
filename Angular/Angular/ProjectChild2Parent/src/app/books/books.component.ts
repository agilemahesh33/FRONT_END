import { Component, ViewChild } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  @ViewChild(BookComponent) Child!:BookComponent

  c:number=0;
  book:string='';
  bn:string = '';
fromChildC = 0;
childbook: string='';
  public ChildData($event:any): void{
    this.childbook=$event;
  }
ngAfterViewInit(){
this.fromChildC = this.Child.c1;
}

IncrementChild(){
  this.c++;
  console.log(this.c);
}
updateBook(){
  this.fromChildC = this.Child.c1;
  console.log(this.book);
  this.book=this.bn;
  
}
parentfun(){
  this.Child.ChildMessage();
}
}
