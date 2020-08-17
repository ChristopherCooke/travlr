import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  trips: Trip[];
  
  message: string;

  constructor(
    private tripDataService: TripDataService,
    private authenticationService: Authentication,
    private router: Router
    ) { }
  
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips founds';
          this.trips = foundTrips;
        });
  }  

  ngOnInit(): void {
    this.getTrips();
  }

}
