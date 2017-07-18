import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {PositionTypeComponent } from './position-type/position-type.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'position-types', component: PositionTypeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
