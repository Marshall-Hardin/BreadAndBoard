import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triprow',
  templateUrl: './triprow.component.html',
  styleUrls: ['./triprow.component.css']
})
export class TriprowComponent implements OnInit {

  @Input() trip : Trip;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  private onEdit() {
    localStorage.setItem("tripId", this.trip.tripId.toString());
    this.router.navigate(['./tripplanner']);
  }
}
