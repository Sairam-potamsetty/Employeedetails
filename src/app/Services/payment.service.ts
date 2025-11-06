import { Injectable } from "@angular/core";
import { Employee } from "../Models/employee.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Payment } from "../Models/payment.model";
import { Verify } from "../Models/verify.model";
 @Injectable({providedIn:"root"})
export class employee{
    
    private apiurl="https://localhost:44361/api/Payments"

  constructor(private http:HttpClient){}

 CreateOrder(): Observable<Payment[]> {
  const body = {
    amount: 50000,        // amount in paise
    receipt: 'receipt#1'
  };
  return this.http.post<Payment[]>(this.apiurl+'/create-order', body);
}
Verification(verify: Verify): Observable<any> {
    debugger;
  return this.http.post<any>(this.apiurl + '/verify', verify);
}

}
