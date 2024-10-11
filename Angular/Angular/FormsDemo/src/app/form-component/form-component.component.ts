import { Component } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {

  Submit(login: any){
    console.log("Form Submitted !",login);
  }
}
