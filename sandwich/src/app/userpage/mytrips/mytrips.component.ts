import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { Router } from '@angular/router';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/user';


const httpOptions =
{
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    })
}

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  user: User;
  trips: Trip[];
  tripName: string;
  url = 'http://localhost:8080/api/v1/table/';

  constructor(private router: Router, private http: HttpClient) {
    this.trips = [{
      tripId: 0,
      tripName: '',
      accountId: 0
    }];
    this.user = JSON.parse(localStorage.getItem("user"));
    this.http.post<Trip[]>(`${this.url}usertrips`, JSON.stringify(this.user.accountId), httpOptions).subscribe(data => { this.trips = data, console.log(this.trips) });

  }

  ngOnInit() {

  }

  private onAddTrip() {
    let trip: Trip = {
      tripName: this.tripName,
      accountId: JSON.parse(localStorage.getItem("user")).accountId
    }
    this.http.post<Trip>(`${this.url}newtrip`, JSON.stringify(trip), httpOptions).subscribe(data => { trip = data });
  }
}
