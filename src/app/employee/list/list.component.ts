import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EmployeeComponent implements OnInit {
  errorMessage: string;
  employees: Employee[];
  mode: 'Observable';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
                        .subscribe(
                          employess => this.employees = employess,
                          error => this.errorMessage = <any> error
                        );
  }

}
