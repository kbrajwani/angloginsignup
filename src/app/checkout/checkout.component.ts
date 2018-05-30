import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
