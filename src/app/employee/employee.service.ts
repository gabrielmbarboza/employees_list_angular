import { Injectable } from '@angular/core';
import {Http, Response }         from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    private employeesUrl = 'http://localhost:8000/api/v1/employees';

    constructor (private http: Http) {}

    getEmployees(): Observable<Employee[]> {
        return this.http.get(this.employeesUrl)
                        .map((res:Response) => res.json().data);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get(this.employeesUrl + '/' + id)
                        .map((res:Response) => res.json());
    }
}
