import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name:string="vishwas";
  pass:string="pass123";
  constructor(
     private router: Router,
    ) {}
  ngOnInit(): void {
  }
  userModel = new User("","");
  auth(){
    if(this.userModel.username==this.name && this.userModel.pass==this.pass){
      alert("Successsful!");
      this.router.navigate(['/loggedin'])
    }else{
      alert("Login failed!!! Retry!!!");
    }
    this.userModel.username="";
    this.userModel.pass="";
  }
}
