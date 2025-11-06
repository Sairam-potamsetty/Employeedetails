import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


interface Task {
  id_no: number;
  name: string;
  age: number;

}

@Component({
  standalone: true,
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  imports: [FormsModule,CommonModule]  // ✅ Include FormsModule here
})
export class ToDoListComponent {
  emp: Task[] = []; // list of all tasks
  task: Task = { id_no: 0, name: '', age: 0 }; // single object for input binding
  isEditMode: boolean = false;
  
    
ishide:boolean=false;
readonly Emp1=this.emp;
  addTask() {
    const newTask: Task = {
      id_no: this.emp.length + 1,
      name: this.task.name,
      age: this.task.age
    };
    this.emp.push(newTask);

    // reset the input form
    this.task = { id_no: 0, name: '', age: 0 };
  }

  deleteTask(index: number) {
    this.emp.splice(index, 1);
  }
  editTask(index: number) {
    const taskToEdit = this.emp[index];
    this.task = { ...taskToEdit };
    this.isEditMode = true;
  }
  cancelEdit() {
    this.task = { id_no: 0, name: '', age: 0 };
  }
  updateTask() {
    const index = this.emp.findIndex(t => t.id_no === this.task.id_no);
    if (index !== -1) {
      this.emp[index] = { ...this.task };
    }
    this.cancelEdit();
     this.ishide=true;
   

}
searchTask(search: string) {
  const n=document.getElementById("") as HTMLInputElement
    debugger;
  const empCopy: Task[] = [...this.emp];
  if (!search || search=='') {
    this.emp = empCopy;
    this.emp = this.Emp1;
    return;
  }
 
    this.emp=this.Emp1.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
  
    
}

add(){
    this.ishide=false;
}
ClearTask(search: HTMLInputElement){
  
    search.value='';
    this.emp=this.Emp1;
}

}
