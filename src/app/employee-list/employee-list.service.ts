import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private url: string = "http://localhost:3000/api/employeeList";

  constructor(private http: HttpClient) { }
  getEmployee(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.url);
  }
}
