import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  username:string;
  password:string;
  userId:number;
  email:string;
  name:string;

  ngOnInit() 
  {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "");
      xhr.onreadystatechange = () => 
      {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
          let user:User;
          user = JSON.parse(xhr.response);
          this.username = user.username;
          this.password = user.password;
          this.email = user.email;
          this.name = user.name;
        }
      };
      xhr.send();
  }

}
