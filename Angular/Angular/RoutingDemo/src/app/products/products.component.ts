import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  productId = 0;
  photoId = 0;
  constructor(private activatedRoute: ActivatedRoute){
  this.activatedRoute.params.subscribe((params)=>{
    console.log(params);
    const internValue = params;
    this.productId = internValue['ProductID'];
    this.photoId = internValue['PhotoId'];
  })
  }  
}
