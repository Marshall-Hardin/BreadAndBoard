import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';

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
  edit : boolean = false;
  show : boolean = true;
  username : string;
  email : string;
  name : string;
  accessLevel : number;
  adminLevel : string;

  user : User;

  postData = { username: '', password: '' };
  url = 'http://localhost:8080/api/v1/table/';
  json;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.username;
    this.email = this.user.email;
    this.name = this.user.name;
    this.accessLevel = this.user.accessLevel;
    if(this.accessLevel === 1) {
      this.adminLevel = "User";
    }
    else if(this.accessLevel === 2) {
      this.adminLevel = "Admin";
    }
    else if(this.accessLevel === 3) {
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
    
  }


}
