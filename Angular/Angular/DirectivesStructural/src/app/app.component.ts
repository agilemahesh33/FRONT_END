// app.component.ts
// ngIf Example
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible = false;
  myArray = ["Apple","Banana","Oranges","Chikku"];
  WeekDays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  WDno:number=0;
  isSelected=false;
  ddSelectedItem='';
  ddSI='';  
  Show1(){
        this.isVisible = false;
  }
  Show2(){
        this.isVisible = true;
  }
  SelectFun(){    
    this.isSelected=true;
    //this.ddSelectedItem = this.ddSI;

    // Get the select element
  const selectElement = document.getElementById('fruits') as HTMLSelectElement;
  
  // Get the selected value
  const selectedValue = selectElement.value;

  // Check if a valid option is selected (i.e., not the default)
  if (selectedValue) {
    document.getElementById('SelectedContent')!.textContent = `You selected: ${selectedValue}`;
  } else {
    document.getElementById('SelectedContent')!.textContent = 'No fruit selected, Please select';
  }
  }
  getDay()
  {
    this.WDno =this.WDno;
  }

  fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange','Papaya'];
  selectedFruit?: string;
  selectFruit(index: number) {
    this.selectedFruit = this.fruits[index];
  }
}