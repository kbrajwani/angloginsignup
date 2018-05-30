import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
    localStorage.setItem('Email','');
    this._router.navigate(['/login']);
  }

}
