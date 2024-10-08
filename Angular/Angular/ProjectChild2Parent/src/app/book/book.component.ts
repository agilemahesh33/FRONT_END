import { Component, EventEmitter, Input, Output} from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
@Input() IncC!:number
@Input() bookname!:string
childbook!:string;
c1=0;


// myData is a type of EventEmitter and pass string type of value
@Output() myData = new EventEmitter<any>();

// This method will get invoked on Click event of button 
public btnClick(){
  //emit is inbuild method available inside EventEmitter
  //this.myData.emit(this.childbook); 
  this.c1++;
  console.log(this.c1)
}

ChildMessage()
{
  alert("I from Child");
}
}
