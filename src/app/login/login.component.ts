import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { LoginService } from './login.service';
import { User_Class } from './user_class';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public _router:Router,public data: LoginService) {
 localStorage.setItem('Email','');
   }
  email_id:string;
  password:string;
  mobile:string;
  address:string='';
  gender:string='';
  uname:string;
  ngOnInit() {
    
  }
  login(){
    

    this.data.Login(new User_Class(this.email_id,'',this.password,'','','',''))
    .subscribe(
      (x:User_Class[])=>{


        if (x.length==1) {
          localStorage.setItem('Email',this.email_id);
          console.log(this.email_id);
        this._router.navigate(['/index']);
          
        }
        else {
          
         alert("Something Wrong");
        }
          
      },
      function(error){
        console.log(error);
      },
      function(){}
    );
}

adduser()
  {
    

    const fd = new FormData();

    fd.append('email',this.email_id);
    fd.append("password",this.password);
    fd.append("uname",this.uname);
    fd.append("gender",this.gender);
    fd.append("mobile_no",this.mobile);
    fd.append("address",this.address);
    
    console.log(fd);
    
    //this.data.addUser(fd).subscribe(
      this.data.addUser(new User_Class(this.email_id,this.uname,this.password,this.address,this.mobile,this.gender,'')).subscribe(
    (data)=>{alert("success");},   
      function(error){alert(error);},			
      function(){
    }			
    );
    
  }

}
