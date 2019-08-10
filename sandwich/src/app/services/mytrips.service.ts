import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../models/trip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MytripsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTrips(userid:Number):Observable<Trip[]>
  {
    return this.http.post<Trip[]>(`${this.baseUrl}${this.urlGetall}`, userid, httpOptions);
  }

  editTrip(trip:Trip):Observable<Trip>
  {
    return this.http.post<Trip>(`${this.baseUrl}${this.urlEditTrip}`, trip, httpOptions);
  }

  newTrip(trip:Trip):Observable<Trip>
  {
    return this.http.post<Trip>(`${this.baseUrl}${this.urlNewTrip}`, trip, httpOptions);
  }

  deleteTrip(trip:Trip):Observable<Trip>
  {
    return this.http.post<Trip>(`${this.baseUrl}${this.deleteTrip}`, trip.tripId,httpOptions);
  }

  baseUrl:string = 'http://localhost:8080/';
  urlGetall:string = 'api/v1/table/usertrips';
  urlEditTrip:string = 'api/v1/table/edittrip';
  urlNewTrip:string = 'api/v1/table/newtrip';
  urlDeleteTrip:string = 'api/v1/table/deletetrip';

}
