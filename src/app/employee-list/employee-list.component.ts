import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
    employees = this.employeeService.getEmployees();

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
        //this.employees = this.employeeService.getEmployees();
    }
}