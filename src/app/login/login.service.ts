import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User_Class } from './user_class';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  url_login: string = "http://localhost:3000/login/";
  url_signup:string="http://localhost:3000/signup/";
  
  constructor(public http: HttpClient) { }


  Login(user)
  {
    
    let body=JSON.stringify(user);
  
    return this.http.post(this.url_login,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  addUser(user){
    console.log(user);
    let body = JSON.stringify(user);
    
   return this.http.post(this.url_signup, body,{headers:new HttpHeaders().set('Content-Type','application/json')} );
  }
  /*Login(user) {
    let body = JSON.stringify(user);
    console.log("hey");
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_login, body, ro).map((res) => res.json());
  }*/
  
}
