import { Component, OnInit } from '@angular/core';
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
  selector: 'app-triprow',
  templateUrl: './triprow.component.html',
  styleUrls: ['./triprow.component.css']
})
export class TriprowComponent implements OnInit {
  user: User;
  trips: any;
  url = 'http://localhost:8080/api/v1/table/';

  constructor(private router: Router, private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.http.post(`${this.url}usertrips`, JSON.stringify(this.user.accountId), httpOptions).subscribe(data => { this.trips = data, console.log(this.trips) });
  }

  ngOnInit() {
  }

}
