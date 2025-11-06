import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import this
import{SidenavComponent}from'./Components/sidenavbar/sidenavbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,SidenavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeDetails');
  auth:boolean=sessionStorage.getItem("Auth")=='true';
}
