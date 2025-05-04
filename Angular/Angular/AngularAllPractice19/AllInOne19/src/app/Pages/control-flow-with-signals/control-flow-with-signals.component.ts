import { CommonModule,NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-control-flow-with-signals',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './control-flow-with-signals.component.html',
  styleUrl: './control-flow-with-signals.component.css',
  standalone : true
})
export class ControlFlowWithSignalsComponent {
  txthideshow: boolean = false;
  txtisVisible = signal<boolean>(true);
  myarr: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  ShowHide() {
    this.txthideshow = !this.txthideshow;
  }
  SignalShow() {
    this.txtisVisible.set(false);
    this.txthideshow = false;
  }
  SignalHide() {
    this.txtisVisible.set(true);
    this.txthideshow = true;
  }
}
