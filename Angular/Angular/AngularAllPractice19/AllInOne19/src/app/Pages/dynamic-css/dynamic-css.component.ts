import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './dynamic-css.component.html',
  styleUrl: './dynamic-css.component.css',
  standalone: true
})
export class DynamicCssComponent {
  strClassName: string = '';

}
