import { Component, OnInit, NgZone } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { TripplannerService } from '../../services/tripplanner.service';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent implements OnInit {

  destinations: Destination[];

  tripId: number;

  constructor(
    private tripService: TripplannerService
  ){}

  ngOnInit() {

    this.tripService.getDestination().subscribe(destinations => {this.destinations = destinations});
  }

  onMapClick(event) {
    if(this.destinations !=undefined)
    {
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumber:this.destinations.length,
        location:'',
        destLat: event.coords.lat,
        destLong: event.coords.lng,
        destDate: new Date
      }
      console.log(destination.destNumber);
      this.destinations.push(destination);
      this.tripService.saveDestination(destination).subscribe(destination => {this.destinations[destination.destNumber] = destination});
    }
    else
    {
      this.destinations = [{
        tripId: 1,
        destName: '',
        destNumber: 0,
        location: '',
        destLat: 0,
        destLong: 0,
        destDate: new Date
      }]
      this.tripService.saveDestination(this.destinations[0]).subscribe(destination => {this.destinations[0] = destination});
    }
  }

  addDestination() {
    if(this.destinations !=undefined)
    {
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumber:this.destinations.length,
        location:'',
        destLat: 0,
        destLong: 0,
        destDate: new Date
      }
      console.log(destination.destNumber);
      console.log(destination);
      this.destinations.push(destination);
      this.tripService.saveDestination(destination).subscribe(destination => {this.destinations[destination.destNumber] = destination, console.log(destination)});
    }
    else
    {
      this.destinations = [{
        tripId: 1,
        destName: '',
        destNumber: 0,
        location: '',
        destLat: 0,
        destLong: 0,
        destDate: new Date
      }]
      this.tripService.saveDestination(this.destinations[0]).subscribe(destination => {this.destinations[0] = destination});
    }
  }

  deleteDestination(destination:Destination)
  {
    this.destinations.splice(destination.destNumber, 1);
    for(let i = 0; i < this.destinations.length-1; i++)
    {
      this.destinations[i].destNumber = i;
    }
  }

  updateDestination(destination: Destination){
    this.tripService.getGeoCode(destination).subscribe(data => {
      let loc = this.parseGeoCodeJSON(data);
      this.destinations[destination.destNumber].destLat = loc.lat;
      this.destinations[destination.destNumber].destLong = loc.lng;
    },);
    this.tripService.saveDestination(destination).subscribe(dest => { this.destinations[destination.destNumber] = dest, console.log(dest)});
  }

  parseGeoCodeJSON(data: Object){
    // let results = data["results"][0];
    // let geo = results["geometry"];
    // let location = geo["location"];
    return data["results"][0]["geometry"]["location"];
    //return location;
  }

}

