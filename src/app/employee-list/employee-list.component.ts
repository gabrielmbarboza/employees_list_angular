import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Observable} from 'rxjs/Rx';

import { Employee } from '../employee';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
    errorMessage: string;
    employees: Employee[];
    mode: 'Observable';

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getEmployees()
                            .subscribe(
                                employees => this.employees = employees,
                                error => this.errorMessage = <any> error
                            );
    }
}