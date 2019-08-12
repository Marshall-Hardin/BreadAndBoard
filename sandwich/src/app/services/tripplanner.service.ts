import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from '../models/destination';

const httpOptions = 
{
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TripplannerService {

  baseUrl:string = 'http://localhost:8080/';
  getUrl:string = 'api/v1/table/tripdest';


  constructor(
    private http: HttpClient
  ) { }

  getDestination():Observable<Destination[]>
  {
    return this.http.post<Destination[]>(`${this.baseUrl}${this.getUrl}`, 1 ,httpOptions);
    //localStorage.getItem('tripId')
  }

  getGeoCode(destination:Destination):Observable<Object>
  {
    let corsUrl = 'https://cors-anywhere.herokuapp.com/';
    return this.http.get<Object>(corsUrl + `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${destination.destLocation}&key=AIzaSyBj773FOJ6yJsOyLx5js8e_WOYePNVrvdQ`);
  }

    // api/v1/table/savedest --update/creating destinations
    urlSaveDest:string = 'api/v1/table/savedest';

    saveDestination(destination)
    {
      this.http.post(`${this.baseUrl}${this.urlSaveDest}`, destination, httpOptions).subscribe();
    }

}
