import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { PositionType } from './position-type';

@Injectable()
export class PositionTypeService {
  private positionTypeUrl = 'http://localhost:8000/api/v1/position-types';

  constructor(private http: Http){}

  getPostionTypes(): Observable<PositionType[]> {
    return this.http.get(this.positionTypeUrl)
                    .map((res:Response) => res.json().data);
  }
}
