import { Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 36;
  longitude = 20;

  constructor(private mapService:MapService) { }

  ngOnInit() 
  {
  
  }


  onDestSelect(event)
  {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
