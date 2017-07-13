import { Component, OnInit } from '@angular/core';

import { PositionTypeService } from './position-type.service';
import { PositionType } from './position-type';

@Component({
  selector: 'app-position-type',
  templateUrl: './position-type.component.html',
  styleUrls: ['./position-type.component.css']
})
export class PositionTypeComponent implements OnInit {
  positionTypes: PositionType[];
  errorMessage: string;
  mode: 'Observable';

  constructor(private positionTypeService: PositionTypeService) { }

  ngOnInit() {
    this.positionTypeService.getPostionTypes()
                            .subscribe(
                              positionTypes => this.positionTypes = positionTypes,
                              error => this.errorMessage = <any> error
                            );
  }

}
