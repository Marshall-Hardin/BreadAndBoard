import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    let user : User = JSON.parse(localStorage.getItem("user"));
    user.username = "";
    localStorage.setItem("user", JSON.stringify(user));
  }
}
