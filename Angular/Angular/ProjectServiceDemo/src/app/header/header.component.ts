import { Component } from '@angular/core';
import { ProdDetailsServiceService } from '../prod-details-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  c=0;
constructor(private pds: ProdDetailsServiceService){
}
  getData(){
    this.c=this.pds.getC();
  }
}
