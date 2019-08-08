import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {

  destinations: Destination[];



  tripId: number;

  constructor() { }

  ngOnInit() {
    this.destinations = [{
      tripId: 1,
      destName: 'Shri Lanka',
      destNumb: 1,
      destLocation: '',
      destLat: 11,
      destLng: 12
    }, {
      tripId: 1,
      destName: 'Cambodia',
      destNumb: 2,
      destLocation: '',
      destLat: 14,
      destLng: 14
    }, {
      tripId:1,
      destName:'Turkey',
      destNumb:3,
      destLocation:'',
      destLat: 16,
      destLng: 16
    }, {
      tripId:1,
      destName:'',
      destNumb:4,
      destLocation:'',
      destLat: 18,
      destLng: 18
    }, {
      tripId:1,
      destName:'',
      destNumb:5,
      destLocation:'',
      destLat: 20,
      destLng: 20
    }]
  }

  onMapClick(event) {
    let destination: Destination =
    {
      tripId:1,
      destName:'',
      destNumb:this.destinations.length,
      destLocation:'',
      destLat: event.coords.lat,
      destLng: event.coords.lng
    }
    this.destinations.push(destination);
  }

}
