import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) { }

  public onSubmit() {
    this.username;
    this.password;
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['./page']);
  }
}
