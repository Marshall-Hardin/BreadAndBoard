import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorschoice',
  templateUrl: './editorschoice.component.html',
  styleUrls: ['./editorschoice.component.css']
})
export class EditorschoiceComponent implements OnInit {

  private restaurant = "";
  private location = "";

  constructor() { }

  ngOnInit() {
  }

  sendInput() {
    // send inputs to backend
    console.log(this.restaurant);
    console.log(this.location);
  }

}
