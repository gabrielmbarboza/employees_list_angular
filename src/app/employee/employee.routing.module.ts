import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const employeeRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent, children: [
      { path: 'new', component: EmployeeAddComponent},
      { path: ':id', component: EmployeeShowComponent },
      { path: ':id/edit', component: EmployeeAddComponent }
  ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(employeeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeRoutingModule {}