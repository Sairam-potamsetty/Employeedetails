import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  template: `
    <div class="card">
      <h4>{{ employee.name }}</h4>
      <p>{{ employee.role }}</p>
      <button (click)="editEmployee()">Edit</button>
      <button (click)="deleteEmployee()">Delete</button>
    </div>
  `
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<any>();

  deleteEmployee() {
    debugger;
    this.delete.emit(this.employee.id); // Sends ID to parent
  }

  editEmployee() {
    debugger;
    this.edit.emit(this.employee); // Sends full object to parent
  }
}
