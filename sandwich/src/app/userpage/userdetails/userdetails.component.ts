import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Destination } from 'src/app/models/destination';

const httpOptions =
{
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    })
}

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit {
  edit: boolean = false;
  show: boolean = true;
  username: string;
  password: string;
  email: string;
  name: string;
  accessLevel: number;
  adminLevel: string;
  accountId: number;
  banDesc: string;

  user: User;

  postData = { username: '' };
  url = 'http://localhost:8080/api/v1/table/';
  json;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    this.password = this.user.password;
    this.email = this.user.email;
    this.name = this.user.name;
    this.accountId = this.user.accountId;
    this.accessLevel = this.user.accessLevel;
    this.banDesc = this.user.banDesc;
    if (this.accessLevel === 1) {
      this.adminLevel = "User";
    }
    else if (this.accessLevel === 2) {
      this.adminLevel = "Admin";
    }
    else if (this.accessLevel === 3) {
      this.adminLevel = "Banned";
    }
  }

  ngOnInit() {
  }

  public onClick() {
    this.show = !this.show;
    this.edit = !this.edit;
  }

  public onSubmit() {
    let user: User = {
      accountId: this.accountId,
      email: this.email,
      password: this.password,
      name: this.name,
      username: this.username,
      accessLevel: this.accessLevel,
      banDesc: this.banDesc
    };
    this.http.post(`${this.url}register`, JSON.stringify(user), httpOptions).subscribe(data => { user = data, this.validation(user) });
    console.log(JSON.stringify(user));
  }

  public validation(user: User) {
    if (user.name === "" || user.email === "") {
      return; //invalid
    }

    localStorage.setItem("user",
      JSON.stringify(user));
  }
}
