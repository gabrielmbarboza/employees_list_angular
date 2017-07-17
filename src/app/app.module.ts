import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee/employee.service';
import { PositionTypeService } from './position-type/position-type.service';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { PositionTypeComponent } from './position-type/position-type.component';
import { EmployeeComponent } from './employee/list/list.component';
import { ShowComponent } from './employee/show/show.component';
import { EmployeeEditComponent } from './employee/edit/edit.component';
import { AddComponent } from './employee/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PositionTypeComponent,
    EmployeeComponent,
    ShowComponent,
    EmployeeEditComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService,
    PositionTypeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
