import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  trips:Trip[];

  constructor() { }

  ngOnInit() 
  {
    
  }

}
