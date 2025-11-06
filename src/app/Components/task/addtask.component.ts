import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { ntcPipe } from '../../../app/shared/pipes/capitalize.pipe';
import { HighlightDirective } from "../../shared/directives/highlight.directive";

@Component({
  selector: 'app-addtask',        // ✅ standard Angular naming convention
  standalone: true,
  imports: [CommonModule, FormsModule,ntcPipe,HighlightDirective],
  templateUrl: './addtask.component.html'
})
export class AddTaskComponent {
  user: UserDetails[] = [];
  User: UserDetails = { username: '', userrole: 0, salary: 0 };

  save() {
    const data: UserDetails = {
      username: this.User.username,
      userrole: this.User.userrole,
      salary: this.User.salary
    };
    this.user.push(data);

    // Optional: reset form after saving
    this.User = { username: '', userrole: 0, salary: 0 };
  }
}

interface UserDetails {
  username: string;
  userrole: number;
  salary: number;
}
