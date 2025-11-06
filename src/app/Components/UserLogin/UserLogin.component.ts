import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from "@angular/router";
import{OnInit} from'@angular/core';


interface login{
    UserName:string;
    Password:string;
}
interface register{
    UserName:string;
    Password1:string;
    Password2:string;
    Mobile:string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    RouterLink,
    RouterOutlet
  ],
  selector: "UserLogin",
  templateUrl: "./UserLogin.component.html"
})

export class UserLoginComponent
{
    isactive:boolean=sessionStorage.getItem("isactive")=='true';
    userlogin:boolean=false;
    login:boolean=false;
    Username:string="admin";
    pass:string="1234";
    user:login[]=[];
    userD:login={UserName:'',Password:''};
    Registeruser:register[]=[];
    registeruser:register={UserName:'',Password1:'',Password2:'',Mobile:''};
    passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{4,}$/;
 
    count:number=0;

   constructor(private toastr: ToastrService,private router:Router) {}
 ngOnInit(): void {
    debugger;
  const savedUsername = sessionStorage.getItem("username") || '';
  const savedPassword = sessionStorage.getItem("password") || '';

  // ✅ just check the boolean
  if (sessionStorage.getItem("isactive")=='true') {
    this.userD = {
      ...this.userD,
      UserName: savedUsername,
      Password: savedPassword
    };
  }
}
// This will trigger when user toggles checkbox

    Submit(){
        debugger;
        if(this.userD.UserName==sessionStorage.getItem("username") && this.userD.Password==sessionStorage.getItem("password")){
            this.login=true;
            sessionStorage.setItem("Auth", 'true');
<<<<<<< HEAD
      // navigate to root which uses SidenavComponent as parent layout
      this.router.navigate(['/']);
=======
            this.router.navigate(['/navbar']);
>>>>>>> b30e667 (intial project commit)
        }

    }
   
    onRememberMeChange(event:any){
        debugger;
        if(sessionStorage.getItem("isactive")=='true'){
        sessionStorage.setItem("isactive",false.toString());
        }else{
            sessionStorage.setItem("isactive",true.toString());
    }
    
    }
}
