import { Component, OnInit } from '@angular/core';
import { ViewallbansComponent } from '../viewallbans/viewallbans.component';

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
 
export class BanComponent implements OnInit {

  private banEmail = "";
  //private vb : ViewallbansComponent = new ViewallbansComponent(); 

  constructor() { 
  }

  sendInput() {
    // send the input to backend
    ViewallbansComponent.addToBanList(this.banEmail);
  }

  ngOnInit() {}
}
