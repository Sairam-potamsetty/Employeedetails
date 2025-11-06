import { Injectable } from "@angular/core";
import { Employee } from "../Models/employee.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" })
export class EmployeeService {
  private apiurl = "http://localhost:2024/getemployee";

  constructor(private http: HttpClient) {}

  getemployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiurl);
  }

  // correctly spelled and idiomatic service method
  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiurl, emp);
  }
}