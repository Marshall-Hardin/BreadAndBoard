import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions = 
{
  headers: new HttpHeaders(
  {
    'Content-type': 'application/json'
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
  // url = 'http://httpbin.org/post';
  url = 'http://localhost:8080/api/v1/table/';
  json;
  user: User;

  constructor(private router: Router, private http: HttpClient) { }

  // public loginPost() {
  //   let corsUrl = 'https://cors-anywhere.herokuapp.com/';
  //   console.log("running...");
  //   this.http.post(corsUrl + this.url + 'login', this.postData).toPromise().then((data: any) => {
  //     this.user = JSON.parse(data.data);
  //     localStorage.setItem("user", JSON.stringify(this.user));
  //   });
  // }

  public loginPost()
  {
    this.user = {username:this.username, password:this.password};
    //let corsUrl = 'https://cors-anywhere.herokuapp.com/';
    console.log("Attempting to do the thing");
    this.http.post<User>(`${this.url}login`, this.user, httpOptions).subscribe(data => {this.user = data});
    sessionStorage.setItem("user", JSON.stringify(this.user));
    console.log("User: " + this.user);

  }

  public onSubmit() {
    this.postData.username = this.username;
    this.postData.password = this.password;
    this.loginPost();
    console.log(JSON.parse(localStorage.getItem("user")));
    // this.router.navigate(['./page']);
  }
}
