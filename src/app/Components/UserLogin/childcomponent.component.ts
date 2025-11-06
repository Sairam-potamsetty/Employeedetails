import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor
import { EmployeeCardComponent } from './usercomponent.component'; // ✅ Import child

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent], // ✅ Add both here
  template: `
    <h2>Employee List</h2>
    <app-employee-card
      *ngFor="let emp of employees"
      [employee]="emp"
      (delete)="onEmployeeDelete($event)"
      (edit)="onEmployeeEdit($event)">
    </app-employee-card>
  `
})
export class EmployeeListComponent1 {
  employees = [
    { id: 1, name: 'Sairam', role: 'Developer' },
    { id: 2, name: 'Andres', role: 'Tester' }
  ];

  onEmployeeDelete(id: number) {
    debugger;
    this.employees = this.employees.filter(e => e.id !== id);
    console.log('Deleted employee:', id);
  }

  onEmployeeEdit(emp: any) {
    debugger;
    console.log('Editing employee:', emp);
  }
}
