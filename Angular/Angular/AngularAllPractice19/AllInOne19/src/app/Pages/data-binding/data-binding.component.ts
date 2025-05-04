import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  empName = "Mahesh";
  DOJ: Date = new Date;
  isActive: boolean = true;
  bgcolor: string = "bg-success";
  myinputt: string = "radio";
  mycheckbox: string = "checkbox";
  SelectedCity : string ="Pune";

  getAlert()
  {
    alert("Hello, Welcome to Angular");
  }
  ChangeCourse(name:string)
  {
    this.empName = name
  }
  CityChanged()
  {
    alert("City Changed to "+ this.SelectedCity);
  }
}
