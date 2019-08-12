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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : string;
  password : string;
  name : string;

  postData = { username: '', password: '', name: ''};
  url = 'http://localhost:8080/api/v1/table/';
  json;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  private postRegister() {
    let user: User = {
      username: this.username,
      password: this.password,
      name: this.name
    };
    this.http.post(`${this.url}register`, JSON.stringify(user), httpOptions).subscribe(data => { user = data, this.validation(user) });
  }

  public validation(user: User) {
    if (user.username === "" || user.password === "" || user.name === "") {
      return; //invalid
    }

    localStorage.setItem("user",
      JSON.stringify(user));
    this.router.navigate(['./login']);
  }

  public onSubmit() {
    this.postData.username = this.username;
    this.postData.password = this.password;
    this.postData.name = this.name;
    this.postRegister();
  }
}
