import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
