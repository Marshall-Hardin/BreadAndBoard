import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

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
        xhr.onreadystatechange = () => {
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

    

  updateAccount()
  {
      let xmr = new XMLHttpRequest();
      xmr.open("POST", "");
      let user:User;
      user.email = this.email;
      user.password = this.password;
      user.username = this.username;
      user.name = this.name;
      user.accessLevel = 1;
      xmr.onreadystatechange = () => {
        if(xmr.readyState === 4 && xmr.status === 200)
        {

        }
      };
      xmr.send(JSON.stringify(user));
  }

}
