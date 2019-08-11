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
    //  this.destinations = [{
    //    tripId: 1,
    //    destName: '',
    //    destNumb: 0,
    //    destLocation: '',
    //    destLat: 0,
    //    destLng: 0,
    //    destDate: new Date
    // }]
    //   tripId: 1,
    //   destName: 'Cambodia',
    //   destNumb: 1,
    //   destLocation: '',
    //   destLat: 14,
    //   destLng: 14
    // }, {
    //   tripId:1,
    //   destName:'Turkey',
    //   destNumb:2,
    //   destLocation:'',
    //   destLat: 16,
    //   destLng: 16
    // }, {
    //   tripId:1,
    //   destName:'',
    //   destNumb:3,
    //   destLocation:'',
    //   destLat: 18,
    //   destLng: 18
    // }, {
    //   tripId:1,
    //   destName:'',
    //   destNumb:4,
    //   destLocation:'',
    //   destLat: 20,
    //   destLng: 20
    // }]
    this.tripService.getDestination().subscribe(destinations => {this.destinations = destinations});
  }

  onMapClick(event) {
    if(this.destinations !=undefined)
    {
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumb:this.destinations.length-1 || 0,
        destLocation:'',
        destLat: event.coords.lat,
        destLng: event.coords.lng,
        destDate: new Date
      }
      this.destinations.push(destination);
    }
    else
    {
      this.destinations = [{
        tripId: 1,
        destName: '',
        destNumb: 0,
        destLocation: '',
        destLat: event.coords.lat,
        destLng: event.coords.lng,
        destDate: new Date
      }]
    }
  }

  addDestination() {
    if(this.destinations !=undefined)
    {
      let destination: Destination =
      {
        tripId:1,
        destName:'',
        destNumb:this.destinations.length-1 || 0,
        destLocation:'',
        destLat: 0,
        destLng: 0,
        destDate: new Date
      }
      this.destinations.push(destination);
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

