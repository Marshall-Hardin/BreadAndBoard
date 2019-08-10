import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @Input() destination: Destination;
  @Output() updateDestination: EventEmitter<Destination> = new EventEmitter();


  edit:boolean = false;
  show:boolean = true;
  geoCoder: any;
  //For reference the vars in Destination are:

  // tripId:number;
  // destName:string;
  // destNumb:number;
  // destDate:Date;
  // destLocation:string;
  // destLat:number;
  // destLng:number;

  constructor(){}
    
  ngOnInit() 
  {
    
  }

  onEditClick()
  {
    this.show = !this.show;
    this.edit = !this.edit;
  }

  onSaveClick(destination)
  {
    this.show = !this.show;
    this.edit = !this.edit;
    this.updateDestination.emit(destination);
  }


  // api/v1/table/tripdest --loading all destinations
  urlGetDests:string = 'api/v1/table/tripdest';
  // api/v1/table/savedest --update/creating destinations
  urlSaveDest:string = 'api/v1/table/tripdest';
  // api/v1/table/deletedest
  urlDeleteDest:string = 'api/v1/table/deletedest';

  baseUrl:string = 'http://localhost:8080/'

}