import { Component, ViewEncapsulation } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { Router } from '@angular/router';
import { SnackbarServiceService } from '../../service/snackbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  // Datatypes
  userData = {
    email:'',
    password:''
  }

  responseData : any;

  // constructor
  constructor(private loginService : UserLoginService, private router : Router, private snack : SnackbarServiceService) { }

  // logic
  formSubmit() {
    console.log('Inside formSubmit');
    this.loginService.loginMethod(this.userData)    
      .subscribe(
        (response : any) => {
          this.responseData = response;
          console.log(this.responseData);

          this.loginService.loginUser(this.responseData.token);
          console.log(this.responseData.token);
          this.snack.openSnackBar("Login Successful", '');
          this.router.navigateByUrl('/dashboard');
        },
        (error : any) => {
          this.snack.openSnackBar("Wrong Credentials", '')
          console.error(error);
        }
      )
  }  
}
