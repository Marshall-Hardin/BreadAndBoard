import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viewallbans',
  templateUrl: './viewallbans.component.html',
  styleUrls: ['./viewallbans.component.css']
})
export class ViewallbansComponent implements OnInit {

  // holds all ban users
  public static banList : string[] = [];

  constructor() {}

  static addToBanList(email : string) {
  
    // repeats are NOT permitted 
    if(!ViewallbansComponent.banList.includes(email)) {
      ViewallbansComponent.banList.push(email); //add to list
    }
  }

  

  viewBans() {
    for(let i = 0; i < ViewallbansComponent.banList.length; i++) {
      let element = ViewallbansComponent.banList[i];
      console.log(element); // used just for testing
    }
  }

  ngOnInit() {
  }

}
