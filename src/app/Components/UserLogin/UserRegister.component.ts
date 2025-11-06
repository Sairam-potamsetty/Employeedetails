import { CommonModule} from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

  interface register{
    UserName:string;
    Password1:string;
    Password2:string;
    Mobile:string;
}
@Component({
    selector: 'UserRegisterComponent',
    standalone: true
    ,imports:[CommonModule,FormsModule],
    templateUrl: "./UserRegister.component.html"
})
export class UserRegisterComponent {

    constructor(private router:Router){}
    userlogin:boolean=false;
    login:boolean=false;
    Username:string="admin";
    pass:string="1234";
    Registeruser:register[]=[];
    registeruser:register={UserName:'',Password1:'',Password2:'',Mobile:''};
    passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{4,}$/;
 
    count:number=0;
      Register(){
        debugger;
        if(!this.passwordRegex.test(this.registeruser.Password1)){
           alert("Password must contains Upper case ,Lower, special and numbers");
           this.count+=1;
        }
        else{
            this.count=0;
        }
        
         if(this.registeruser.Password1!=this.registeruser.Password2)
        {
                      alert("User Password not matched")
                      this.count+=1;        }else{ this.count=0;}
        
         if(this.registeruser.Mobile.length!=10){
           alert("Password Must Contains 10 digits");
                       this.count+=1;

        }else{ this.count=0;}
        if(this.count==0){
        this.userlogin=true;
        sessionStorage.setItem("username",this.registeruser.UserName);
        sessionStorage.setItem("password",this.registeruser.Password1);
this.router.navigate(['/UserLoginComponent']);
        }
    }
}
  