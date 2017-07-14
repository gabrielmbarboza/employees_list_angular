import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeAddFormComponent } from './employee-add-form/employee-add-form.component';
import {PositionTypeComponent } from './position-type/position-type.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'employees/:id', component: EmployeeShowComponent },
    { path: 'employees/new', component: EmployeeAddFormComponent },
    { path: 'position-types', component: PositionTypeComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
