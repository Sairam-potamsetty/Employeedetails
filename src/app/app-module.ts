import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import this
import { EmployeeListComponent } from './Components/EmployeeList/employeelist.component';
import{AddTaskComponent} from './Components/task/addtask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SbiPaymentComponent } from './Components/SBIPayment/SbiPayment.component';
import { PaymentSuccessComponent } from './Components/Payment-success/Payment-success.component';
import { PaymentFailedComponent } from './Components/Payment-Failed/payment-failed.component';
import { EmployeeCardComponent } from './Components/UserLogin/usercomponent.component';
import{EmployeeListComponent1} from'./Components/UserLogin/childcomponent.component';
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    EmployeeListComponent,
    AddTaskComponent,
    BrowserModule,
    FormsModule,
    EmployeeCardComponent,
    EmployeeListComponent1,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    })
  ],
  providers: [],
})
export class AppModule { }
