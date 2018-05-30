import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit {

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
