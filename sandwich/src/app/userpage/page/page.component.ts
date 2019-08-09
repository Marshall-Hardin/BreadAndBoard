import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  // fields banning users
  username : string;
  reason : string;

  // fields editors choice
  restuarantname : string;

  // fields for upgrading user to admin
  upgradedusername : string;


  constructor() { }

  ngOnInit() {
  }

  // banning users
  public onSubmit() {
    this.username;
    this.reason;
    console.log(this.username);
    console.log(this.reason);
  }

  // editors choice
  public onSubmit2() {
    this.restuarantname;
    console.log(this.restuarantname);
  }

  // upgrading user
  public onSubmit3() {
    this.upgradedusername;
    console.log(this.upgradedusername);
  }

}
