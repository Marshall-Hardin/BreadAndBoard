import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  postData = { username: '', password: '' };
  url = 'http://httpbin.org/post';
  json;
  user: User;

  constructor(private router: Router, private http: HttpClient) { }

  public loginPost() {

    console.log("running...");
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      this.user = JSON.parse(data.data);
      localStorage.setItem("user", JSON.stringify(this.user));
    });
  }

  public onSubmit() {
    this.postData.username = this.username;
    this.postData.password = this.password;
    this.loginPost();
    console.log(JSON.parse(localStorage.getItem("user")));
    // this.router.navigate(['./page']);
  }
}
