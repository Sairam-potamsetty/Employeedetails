import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import this
<<<<<<< HEAD

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
=======
import{SidenavComponent}from'./Components/sidenavbar/sidenavbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,SidenavComponent],
>>>>>>> b30e667 (intial project commit)
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeDetails');
<<<<<<< HEAD
  // auth state can be read from sessionStorage when needed
  auth: boolean = sessionStorage.getItem('Auth') == 'true';

  sairam(): void {
    this.auth = true;
    sessionStorage.setItem('Auth', 'true');
  }
=======
  auth:boolean=sessionStorage.getItem("Auth")=='true';
>>>>>>> b30e667 (intial project commit)
}
