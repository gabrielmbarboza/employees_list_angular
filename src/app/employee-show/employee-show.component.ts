import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {
  employee: Employee;
  errorMessage: string;
  mode: 'Observable';
  employeeId: number;

  constructor(private employeeService:EmployeeService, private router:ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe(
        (params: any) => {
           this.employeeId = params['id'];
        }
      );

    this.employeeService.getEmployee(this.employeeId).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any> error
    );
  }

}
