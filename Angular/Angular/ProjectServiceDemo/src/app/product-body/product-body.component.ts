import { Component } from '@angular/core';
import { ProdDetailsServiceService } from '../prod-details-service.service';
@Component({
  selector: 'app-product-body',
  templateUrl: './product-body.component.html',
  styleUrl: './product-body.component.css'
})
export class ProductBodyComponent {
  constructor(private pds: ProdDetailsServiceService){
  }
  Increase(){
      this.pds.Increament();
  }
}
