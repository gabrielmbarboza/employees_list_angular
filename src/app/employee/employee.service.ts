import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    private employeesUrl = 'http://localhost:8000/api/v1/employees';

    constructor (private http: Http) {}

    createEmployee(employee): any {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.employeesUrl, employee);
    }

    updateEmployee(employee): any {
      return this.http.put(this.employeesUrl, employee);
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get(this.employeesUrl)
                        .map((res:Response) => res.json().data);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get(this.employeesUrl + '/' + id)
                        .map((res:Response) => res.json());
    }

    deleteEmployee(id: number): any {
        return this.http.delete(this.employeesUrl + '/' + id)
                        .map((res:Response) => res.json());
    }
}
