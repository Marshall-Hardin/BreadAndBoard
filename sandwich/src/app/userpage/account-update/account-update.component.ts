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

    }

    

  updateAccount(){

  }

}
