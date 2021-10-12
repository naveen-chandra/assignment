import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  register(reqData) {
    return of(reqData);
  }
 }
