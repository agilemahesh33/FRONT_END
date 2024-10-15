import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  price=0;
  size='';
  color='';
  priceFrom=0;
  priceTo=0;
  constructor(private activatedRoute:ActivatedRoute){
   
    this.activatedRoute.queryParams.subscribe(params=>{
    console.log(params);
    this.price=params['price'];
    this.size=params['size'];
    this.color=params['color'];
    this.priceFrom=params['priceFrom'];
    this.priceTo=params['priceTo'];}
  );
  }
}
