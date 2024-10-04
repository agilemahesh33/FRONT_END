import { Component, Input} from '@angular/core';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
@Input() IncC!:number
@Input() bookname!:string
ChildMessage()
{
  alert("I from Child");
}
}
