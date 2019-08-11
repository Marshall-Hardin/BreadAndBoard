import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions =
{
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    })
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  postData = { username: '', password: '' };
  url = 'http://localhost:8080/api/v1/table/';
  json;

  constructor(private router: Router, private http: HttpClient) { }

  public loginPost() {
    let user: User = {
      username: this.username,
      password: this.password
    };
    this.http.post(`${this.url}login`, JSON.stringify(user), httpOptions).subscribe(data => { user = data, this.validation(user) });
  }
  
  public validation(user: User) {
    console.log(user.username);
    if (user.username === "") {
      console.log("Invalid login!")
      return; //invalid
    }
    
    localStorage.setItem("user",
    JSON.stringify(user));
    this.router.navigate(['./page']);
  }

  public onSubmit() {
    this.postData.username = this.username;
    this.postData.password = this.password;
    this.loginPost();
  }
}