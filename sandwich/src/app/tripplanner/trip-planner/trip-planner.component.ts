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
      console.log("Adding to existing array");
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumb:this.destinations.length,
        destLocation:'',
        destLat: event.coords.lat,
        destLng: event.coords.lng,
        destDate: new Date
      }
      console.log(destination.destNumb);
      this.destinations.push(destination);
      this.tripService.saveDestination(destination);
    }
    else
    {
      console.log("Adding new Array");
      this.destinations = [{
        tripId: 1,
        destName: '',
        destNumb: 0,
        destLocation: '',
        destLat: 0,
        destLng: 0,
        destDate: new Date
      }]
      this.tripService.saveDestination(this.destinations[0]);
    }
  }

  addDestination() {
    if(this.destinations !=undefined)
    {
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumb:this.destinations.length || 0,
        destLocation:'',
        destLat: 0,
        destLng: 0,
        destDate: new Date
      }
      console.log(destination.destNumb);
      this.destinations.push(destination);
      this.tripService.saveDestination(destination);
    }
    else
    {
      this.destinations = [{
        tripId: 1,
        destName: '',
        destNumb: 0,
        destLocation: '',
        destLat: 0,
        destLng: 0,
        destDate: new Date
      }]
      this.tripService.saveDestination(this.destinations[0]);
    }
  }

  deleteDestination(destination:Destination)
  {
    this.destinations.splice(destination.destNumb, 1);
    for(let i = 0; i < this.destinations.length-1; i++)
    {
      this.destinations[i].destNumb = i;
    }
  }

  updateDestination(destination: Destination){
    this.tripService.getGeoCode(destination).subscribe(data => {
      let loc = this.parseGeoCodeJSON(data);
      this.destinations[destination.destNumb].destLat = loc.lat;
      this.destinations[destination.destNumb].destLng = loc.lng;
    });
  }

  parseGeoCodeJSON(data: Object){
    // let results = data["results"][0];
    // let geo = results["geometry"];
    // let location = geo["location"];
    return data["results"][0]["geometry"]["location"];
    //return location;
  }

}

