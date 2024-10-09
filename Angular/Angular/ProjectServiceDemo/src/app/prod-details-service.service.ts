import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdDetailsServiceService {
c =0;
  constructor() { }
  Increament(){
    this.c++;
  }
  getC():number{
    return this.c;
  }
}
