import { LoginServices } from './login.services';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServices: LoginServices ) { }

  ngOnInit(): void {
  }
// tslint:disable-next-line: typedef
login(form: NgForm){
const email = form.value.email;
const password = form.value.password;
this.loginServices.login(email, password);

}
}
