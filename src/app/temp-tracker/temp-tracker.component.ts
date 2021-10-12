import { Component, OnInit } from '@angular/core';
import { TempTracker } from './temp-tracker';

@Component({
  selector: 'app-temp-tracker',
  templateUrl: './temp-tracker.component.html',
  styleUrls: ['./temp-tracker.component.scss']
})
export class TempTrackerComponent implements OnInit {

  public tempTracker: any;
  public temp: number;
  public temps: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  insertTemp() {
    this.temps.push(this.temp);
    this.tempTracker = new TempTracker(this.temps);
    this.temp = null;
  }

}
