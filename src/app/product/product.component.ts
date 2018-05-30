import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  email:string='';

  x:string='';
  y:string='';
ngOnInit() {
  
  this.email=localStorage.getItem('Email');
  console.log(this.email);
  if(this.email=="")
  {
    this.y="yy";
  }
  else
  {
    this.x="xx";
  }
  }
 
 

}
