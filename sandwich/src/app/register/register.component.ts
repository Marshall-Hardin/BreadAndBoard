import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : string;
  password : string;
  fullname : string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.username;
    this.password;
    this.fullname;
    console.log(this.username);
    console.log(this.password);
    console.log(this.fullname);
    this.router.navigate(['./login'])
  }

}
