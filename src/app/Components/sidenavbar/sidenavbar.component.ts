import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router ,Routes} from '@angular/router';


@Component({
  selector: 'SidenavComponent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenavbar.component.html',
})
export class SidenavComponent {

    constructor(private router:Router){}
    
  isCollapsed = false;

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
  logout() {
    this.router.navigate(['/UserLoginComponent']);
    sessionStorage.setItem("Auth", 'false');
  }
  
 
  
}
