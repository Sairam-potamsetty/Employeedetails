import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { routes } from "../../app.routes";

interface ForgotPass{
    newpassword1:string;
    newpassword2:string;
}
@Component({
    imports:[CommonModule,RouterLink,FormsModule],
    templateUrl:'./ForgotPassword.component.html',
    standalone:true,
    selector:'Forgot Password'
})

export class LogoutComponent{

  constructor(private toastrService:ToastrService,private router:Router){}

  forgotpass:ForgotPass[]=[];
  Forgot:ForgotPass={newpassword1:'',newpassword2:''}
  Forgotpass(){
  const pass1 = this.Forgot.newpassword1.trim();
  const pass2 = this.Forgot.newpassword2.trim();
    if(!pass1 && !pass2)
    {
        alert("please enter password");
        this.Forgot={newpassword1:'',newpassword2:''}
        return ;
    }
    if(this.Forgot.newpassword1!=this.Forgot.newpassword2){
       alert("password not matching");
       this.Forgot={newpassword1:'',newpassword2:''}
         return ;

    }
    else{
      sessionStorage.setItem("password",this.Forgot.newpassword1)
      this.router.navigate(['/UserLoginComponent']);
    
    }
  }
}
