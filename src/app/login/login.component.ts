import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  aim= 'your perfect banking partner';
  accounts="enter your acno here";

  acno=''
  pswd=''
  constructor() { }

  ngOnInit(): void {
  }
  userDetails:any={
    1000:{acno:1000,username:'Nandu',password:1000,balance:10000},
    1001:{acno:1001,username:'gopik',password:1001,balance:10000},
    1002:{acno:1002,username:'soja',password:1002,balance:10000}
  }

  acnoChange(event:any){
    // console.log(event);
    console.log(event.target.value);
    this.acno = event.target.value;
  }
pswdChange(event:any){
  // console.log(event);
  console.log(event.target.value);
  this.pswd = event.target.value;
}

login(){
  // alert('login clicked');

  var acno = this.acno;
  var pswd = this.pswd;

  var userDetails = this.userDetails;

  if(acno in userDetails){
    if(pswd == userDetails [acno]['password']){
      alert("login successfull");
    }
    else{
      alert("incorrect password");
    }
  }
  else{
    alert("user not exist");
  }

}

}
