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
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PositionTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    EmployeeModule
  ],
  providers: [
    PositionTypeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
