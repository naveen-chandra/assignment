import { Component, OnInit } from '@angular/core';
import { TempTracker } from './temp-tracker';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.scss']
})
export class TempTrackerComponent implements OnInit {

  // Variable to hold TempTracker class instance
  public tempTracker: any;

  // ngModel variable for temp input
  public temp: number;

  // array for holding temp values
  public temps: number[] = [];

  // variable to show/hide alert for temperature below 0 or above 150
  public tempRangeAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Insert a new record for temperature
  insertTemp(): boolean {
    this.tempRangeAlert = false;
    if (this.temp < 0 || this.temp > 150) {
      this.tempRangeAlert = true;
      return false;
    }
    this.temps.push(this.temp);
    this.tempTracker = new TempTracker(this.temps);
    this.temp = null;
  }

}
