import { Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/EmployeeList/employeelist.component';
import { RazorpayComponent } from './Components/Payment/razorpay.component';
import { ToDoListComponent } from './Components/ToDoList/todolist.component';
import { AddTaskComponent } from './Components/task/addtask.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { SbiPaymentComponent } from './Components/SBIPayment/SbiPayment.component';
import { PaymentSuccessComponent } from './Components/Payment-success/Payment-success.component';
import { PaymentFailedComponent } from './Components/Payment-Failed/payment-failed.component';
import { LogoutComponent } from './Components/ForgotPasswrod/ForgotPassword.component';
import { EmployeeListComponent1 } from './Components/UserLogin/childcomponent.component';
import { EmployeeCardComponent } from './Components/UserLogin/usercomponent.component';
import { SidenavComponent } from './Components/sidenavbar/sidenavbar.component';
import{UserRegisterComponent} from'./Components/UserLogin/UserRegister.component';
export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'payment', component: RazorpayComponent },
  { path: 'todolist', component: ToDoListComponent },
  { path: 'addtaskcomponent', component: AddTaskComponent },
  { path: 'UserLoginComponent', component: UserLoginComponent },
  { path: 'payment1', component: SbiPaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment-failed', component: PaymentFailedComponent },
  { path: 'ForgotPassword', component: LogoutComponent },
  { path: 'childcomponent', component: EmployeeListComponent1 },
  { path: 'usercomponent', component: EmployeeCardComponent },
  { path: 'navbar', component: SidenavComponent },
  { path: 'register',component:UserRegisterComponent},
  { path: '**', redirectTo: 'employees' } // fallback route
];
