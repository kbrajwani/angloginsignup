import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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
