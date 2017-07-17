import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeService } from './employee.service';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
    imports:[
      CommonModule,
      RouterModule
    ],
    exports:[],
    declarations:[
      EmployeeListComponent,
      EmployeeShowComponent,
      EmployeeEditComponent,
      EmployeeAddComponent
    ],
    providers:[
      EmployeeService
    ]
})
export class EmployeeModule {}
