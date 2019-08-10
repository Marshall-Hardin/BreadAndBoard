import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination';

const httpOptions = 
{
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TripplannerService {

  baseUrl:string = 'http://localhost:8080/';


  constructor(
    private http: HttpClient
  ) { }

  getDestination():Observable<Destination[]>
  {
    return this.http.get<Destination[]>(this.baseUrl);
  }

  getGeoCode(destination:Destination):Observable<Object>
  {
    let corsUrl = 'https://cors-anywhere.herokuapp.com/';
    return this.http.get<Object>(corsUrl + `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${destination.destLocation}&key=AIzaSyBj773FOJ6yJsOyLx5js8e_WOYePNVrvdQ`);
  }

}
