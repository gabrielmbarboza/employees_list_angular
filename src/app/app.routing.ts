import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'employees', component: EmployeeListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);