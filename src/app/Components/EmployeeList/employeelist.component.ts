import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../Models/employee.model';
import { EmployeeService } from '../../Services/Employee.service';

 interface hello{
name:string
 }
@Component({
  selector: 'app-employee-list',
  standalone: true,        // <-- important
  imports: [CommonModule, FormsModule],  // <-- import modules it uses
  templateUrl: './employeelist.component.html'
})
export class EmployeeListComponent {
  originalEmpList: Employee[] = [];
  ishide=true;
  emp: Employee[] = [
    { EmpId: 1, EmpName: 'John Doe', EmpRole: 'Developer', EmpSalary: 50000, EmpBlock: '' },
    { EmpId: 2, EmpName: 'Jane Smith', EmpRole: 'Designer', EmpSalary: 45000, EmpBlock: '' },
    { EmpId: 3, EmpName: 'Sam Wilson', EmpRole: 'Tester', EmpSalary: 40000, EmpBlock: '' }
  ];
  employee: Employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
  emp1: Employee[] = [];
  isEditMode = false;
  selectedEmployeeId: number | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.addEmployee(this.employee).subscribe({
      next: (saved: Employee) => {
        this.emp.push(saved);
        this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
      },
      error: (err: any) => {
        console.error('Error adding employee via service:', err);
        // fallback to local add so UI remains responsive
        this.emp.push(this.employee);
        this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
      }
    });
    // load employees from the service (getemployee returns Observable<Employee[]>)
    this.employeeService.getemployee().subscribe({
      next: (data: Employee[]) => {
        this.emp = data;
      },
      error: (err: any) => {
        console.error('Error loading employees:', err);
      }
    });
  }

  addEmployee() {
    const newEmp: Employee = {
      ...this.employee,
      EmpId: this.emp.length ? Math.max(...this.emp.map(e => e.EmpId)) + 1 : 1
    };

    // call service to persist employee, then add to local list on success
    this.employeeService.addEmployee(this.employee).subscribe({
      next: (saved: Employee) => {
        this.emp.push(saved);
        this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
      },
      error: (err: any) => {
        console.error('Error adding employee via service:', err);
        // fallback to local add so UI remains responsive
        this.emp.push(newEmp);
        this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
      }
    });
  }

  editEmployee(empId: number) {
    const empToEdit = this.emp.find(e => e.EmpId === empId);
    if (empToEdit) {
      this.employee = { ...empToEdit };
      this.isEditMode = true;
      this.selectedEmployeeId = empId;
    }
  }

  updateEmployee() {
    if (this.selectedEmployeeId !== null) {
      const idx = this.emp.findIndex(e => e.EmpId === this.selectedEmployeeId);
      if (idx > -1) {
        this.emp[idx] = { ...this.employee };
      }
      this.isEditMode = false;
      this.selectedEmployeeId = null;
      this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
    }
  }

  cancelEdit() {
    this.isEditMode = false;
    this.selectedEmployeeId = null;
    this.employee = { EmpId: 0, EmpName: '', EmpRole: '', EmpSalary: 0, EmpBlock: '' };
  }
    deleteEmployee(empId: number) {
      this.emp = this.emp.filter(e => e.EmpId !== empId);
    }
  private readonly emplist=this.emp;  // original data
      EmployeeSearch(empId: number) {
        debugger;
          this.originalEmpList = [...this.emplist];
        if(empId!==null && empId!==0){
       this.emp=this.originalEmpList.filter(e => e.EmpId === empId);
        }
}
    addemployee(){
      this.ishide=false;
    }

showMessage:boolean=true;
Hello:hello={name:"sairam"}
toggle(){
  this.showMessage=!this.showMessage;
}
}

