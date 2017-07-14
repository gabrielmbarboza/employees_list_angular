import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee/employee.service';
import { PositionTypeService } from './position-type/position-type.service';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { PositionTypeComponent } from './position-type/position-type.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeAddFormComponent } from './employee-add-form/employee-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    PositionTypeComponent,
    EmployeeComponent,
    EmployeeShowComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    EmployeeAddFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    EmployeeService,
    PositionTypeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
