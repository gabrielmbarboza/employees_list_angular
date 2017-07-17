import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../../employee/employee';
import { EmployeeService } from '../../employee/employee.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'employee-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  employee: Employee;
  errorMessage: string;
  mode: 'Observable';
  employeeId: number;
  subs: Subscription;

  constructor(private employeeService:EmployeeService, private router:ActivatedRoute) { }

  ngOnInit() {
      this.subs = this.router.params.subscribe(
        (params: any) => {
           this.employeeId = params['id'];
        }
      );

    this.employeeService.getEmployee(this.employeeId).subscribe(
      employee => this.employee = employee,
      error => this.errorMessage = <any> error
    );
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
  }
}
