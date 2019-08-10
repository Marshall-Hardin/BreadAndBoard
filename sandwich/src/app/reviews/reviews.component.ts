import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  radio : number;
  review : string;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    this.radio.valueOf;
    this.review;
    console.log(this.radio);
    console.log(this.review);
  }
}
