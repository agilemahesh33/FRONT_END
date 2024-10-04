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
IncrementChild(){
  this.c++;
  console.log(this.c);
}
updateBook(){
  console.log(this.book);
  this.book=this.bn;
}
parentfun(){
  this.Child.ChildMessage();
}
}
